"use client";

import { MouseEvent, useCallback, useEffect, useState } from "react";
// components
import { IconButton } from "@mui/material";
// icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

type Props = { id: string };

type LikeAdType = { id: string };

const LIKED_ADS_STORAGE_KEY = "liked-ads";

export default function LikeButton({ id }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedAds = localStorage.getItem(LIKED_ADS_STORAGE_KEY);
    if (likedAds !== null) {
      const likedAdsParsed: LikeAdType[] = JSON.parse(likedAds);
      setIsLiked(Boolean(likedAdsParsed.find(({ id: sId }) => sId === id)));
    }
  }, [id]);

  const toggleLike = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsLiked(c => !c);

      const likedAds = localStorage.getItem(LIKED_ADS_STORAGE_KEY);

      if (likedAds !== null) {
        const likedAdsParsed: LikeAdType[] = JSON.parse(likedAds);
        const currentAd = likedAdsParsed.find(({ id: sId }) => sId === id);

        if (currentAd) {
          // unlike
          localStorage.setItem(LIKED_ADS_STORAGE_KEY, JSON.stringify(likedAdsParsed.filter(({ id: sId }) => id !== sId)));
        } else {
          // like
          localStorage.setItem(LIKED_ADS_STORAGE_KEY, JSON.stringify([...likedAdsParsed, { id }]));
        }
      } else {
        // first liked
        localStorage.setItem(LIKED_ADS_STORAGE_KEY, JSON.stringify([{ id }]));
      }
    },
    [id]
  );

  return (
    <IconButton title="Like" size="small" onClick={toggleLike}>
      <ThumbUpIcon sx={{ color: isLiked ? "red" : "unset" }} />
    </IconButton>
  );
}
