"use client";

import Api from "src/api";
import { useCallback, useEffect, useState } from "react";
// utils
import { toast } from "react-toastify";
import { AdFilterTypes } from "src/types/ad/filters";
import { Ad } from "src/types/ad";
// context
import { FilterContextProvider } from "@context/ads-filter";
// components
import { Box } from "@mui/material";
import { WrapWithLoading, WrapWithNoResult } from "@customComponents/wrappers";
import { AdCard, PageCap } from "@components/ads";

export default function Ads() {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState<Ad[]>([]);

  const getAds = useCallback(async (filter?: AdFilterTypes) => {
    try {
      setLoading(true);
      const { results } = await Api.ads.getAds(filter);
      if (results) {
        setAds(results);
        setLoading(false);
      } else {
        toast(`Something went wrong : Trying to refetch please wait.`, { type: "error", onClose: () => getAds(filter) });
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  useEffect(() => {
    getAds();
  }, [getAds]);

  return (
    <Box className="page-max-w">
      <FilterContextProvider value={{ onFilter: getAds, filtering: loading }}>
        <PageCap />
        <Box sx={{ py: 5 }}>
          <WrapWithLoading loading={loading}>
            <WrapWithNoResult length={ads.length}>
              <Box
                sx={{
                  display: "grid",
                  gap: "20px",
                  justifyContent: "center",
                  gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 190px)", lg: "repeat(4, 250px)" }
                }}
              >
                {ads.map(({ id, title, city_name, price, images }) => (
                  <Box key={`ad-card-${id}`}>
                    <AdCard id={id} title={title} city={city_name} price={price} thumbnail={images[0].thumbnail} />
                  </Box>
                ))}
              </Box>
            </WrapWithNoResult>
          </WrapWithLoading>
        </Box>
      </FilterContextProvider>
    </Box>
  );
}
