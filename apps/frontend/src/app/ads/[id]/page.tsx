"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Api from "src/api";
import { Ad } from "src/types/ad";

export default function AdDetails() {
  const { id } = useParams();

  const [ad, setAd] = useState<Ad | null>(null);

  const getAd = useCallback(async (addId: string) => {
    try {
      const { results } = await Api.ads.getAd(addId);
      if (results) {
        setAd(results);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  useEffect(() => {
    getAd(id as string);
  }, [getAd, id]);

  return <div>{ad?.id}</div>;
}
