"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
// components
import { Box } from "@mui/material";
import { Ad } from "src/types/ad";
import Api from "src/api";
import { AdCard } from "../../components/ads";
import AdsCap from "../../components/ads/cap";

export default function Ads() {
  const [ads, setAds] = useState<Ad[]>([]);

  const getAds = useCallback(async () => {
    try {
      const { results, message } = await Api.ads.getAds();
      if (results) {
        setAds(results);
      } else {
        toast(message, { delay: 2000 });
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  useEffect(() => {
    getAds();
  }, [getAds]);

  return (
    <Box>
      <AdsCap />
      <Box
        sx={{
          display: "grid",
          py: 5,
          gap: "20px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(4, 250px)",
          gridAutoRows: "250px"
        }}
      >
        {ads.map(({ id, title, city_name, price, images }) => (
          <Box key={`ad-card-${id}`}>
            <AdCard id={id} title={title} city={city_name} price={price} thumbnail={images[0].thumbnail} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
