"use client";

import Api from "src/api";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
// utils
import { toast } from "react-toastify";
// components
import { Ad } from "src/types/ad";
import { Box } from "@mui/material";

export default function AdDetails() {
  const { id } = useParams();

  const [ad, setAd] = useState<Ad | null>(null);

  const getAd = useCallback(async (addId: string) => {
    try {
      const { error, ...adFromResponse } = await Api.ads.getAd(addId);

      if (!error) {
        setAd(adFromResponse);
      } else {
        toast(`Something went wrong : Trying to refetch please wait.`, { type: "error", onClose: () => getAd(addId) });
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  useEffect(() => {
    getAd(id as string);
  }, [getAd, id]);

  return <Box sx={{ px: 5, py: 2 }} />;
}
