"use client";

import Api from "src/api";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
// utils
import { toast } from "react-toastify";
// components
import { Ad } from "src/types/ad";
import { Box, Divider, Grid, Typography } from "@mui/material";
import WrapWithLoading from "@customComponents/wrappers/wrap-with-loading";
import Image from "next/image";

// Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import LikeButton from "@components/ads/like-button";

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

  return (
    <Box sx={{ p: 5 }}>
      <WrapWithLoading loading={!ad}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Box sx={{ width: { xs: "80vw", md: "50vw" } }}>
              <Swiper zoom modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }}>
                {ad?.images.map(image => (
                  <SwiperSlide key={`add-image-${image.id}`}>
                    {/* In my opinion 30vh on xl devices is very ugly, that is the reason for inappropriate slide sizes */}
                    <Box sx={{ height: { xs: "30vh", md: "50vh" }, position: "relative" }}>
                      <Image src={image.image} alt="Add image" fill style={{ objectFit: "cover" }} />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          <Grid container gap="20px" justifyContent="space-between" alignItems="center">
            <Typography className="ellipsis" sx={{ fontSize: { xs: 16, sm: 18, xl: 22 }, fontWeight: "bold" }}>
              {ad?.title ?? ""}
            </Typography>
            <LikeButton id={ad?.id ?? ""} />
          </Grid>
          <Grid container gap="20px" justifyContent="space-between" alignItems="center">
            <Typography
              className="ellipsis"
              sx={{ fontSize: { xs: 14, sm: 16, xl: 18 }, minWidth: "50%", color: "grey", fontStyle: "italic" }}
            >
              {ad?.city_name ?? ""}, {ad?.district_name ?? ""}
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, sm: 18, xl: 22 }, fontWeight: "bold" }}>{ad?.price}</Typography>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mt: 5 }} dangerouslySetInnerHTML={{ __html: ad?.description ?? "" }} />
        </Box>
      </WrapWithLoading>
    </Box>
  );
}
