"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
// components
import { Box } from "@mui/material";
import { Ad } from "src/types/ad";
import Api from "src/api";
import { WrapWithLoading } from "@customComponents/wrappers";
import { AdCard } from "../../components/ads";
import AdsCap from "../../components/ads/cap";

export default function Ads() {
  const [ads, setAds] = useState<Ad[]>([]);

  const getAds = useCallback(async () => {
    try {
      const { results } = await Api.ads.getAds();
      if (results) {
        setAds(results);
      } else {
        toast(`Something went wrong : Trying to refetch please wait.`, { type: "error", onClose: () => getAds() });
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
      <AdsCap />
      <Box sx={{ py: 5 }}>
        <WrapWithLoading loading={!ads.length}>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              justifyContent: "center",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 190px)", lg: "repeat(4, 250px)" },
              gridAutoRows: "250px"
            }}
          >
            {ads.map(({ id, title, city_name, price, images }) => (
              <Box key={`ad-card-${id}`}>
                <AdCard id={id} title={title} city={city_name} price={price} thumbnail={images[0].thumbnail} />
              </Box>
            ))}
          </Box>
        </WrapWithLoading>
      </Box>
    </Box>
  );
}
