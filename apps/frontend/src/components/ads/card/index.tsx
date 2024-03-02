"use client";

import { MouseEvent, useState } from "react";
// components
import { Box, IconButton, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// images
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LikeButton from "../like-button";

type Props = {
  id: string;
  title: string;
  thumbnail: string;
  city: string;
  price: number;
};

export default function Card({ id, title, thumbnail, city, price }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: MouseEvent) => {
    e.preventDefault();
    setIsLiked(c => !c);
  };

  return (
    <Link href={`/ads/${id}`}>
      <Paper>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={thumbnail}
            alt={title}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", minHeight: "150px", objectFit: "cover", borderRadius: "4px 4px 0 0" }}
          />
          <Box sx={{ p: 1 }}>
            <Box sx={{ display: "grid", gap: "20px", alignItems: "center", gridTemplateColumns: "15fr 1fr" }}>
              <Typography className="ellipsis" sx={{ fontSize: { xs: 12, sm: 14, xl: 17 } }}>
                {title}
              </Typography>
              <LikeButton id={id} />
            </Box>
            <Box sx={{ display: "flex", gap: "20px", justifyContent: "space-between", alignItems: "center", pr: 0.5 }}>
              <Typography
                className="ellipsis"
                sx={{ fontSize: { xs: 8, sm: 12, xl: 14 }, minWidth: "50%", color: "grey", fontStyle: "italic" }}
              >
                {city}
              </Typography>
              <Typography sx={{ fontSize: { xs: 12, sm: 14, xl: 18 } }}>{price}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Link>
  );
}
