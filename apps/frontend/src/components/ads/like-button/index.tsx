"use client";

import { MouseEvent, useState } from "react";
// components
import { IconButton } from "@mui/material";
// icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

type Props = { id: string };

export default function LikeButton({ id }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: MouseEvent) => {
    e.preventDefault();
    setIsLiked(c => !c);
  };
  return (
    <IconButton title="Like" size="small" onClick={toggleLike}>
      <ThumbUpIcon sx={{ color: isLiked ? "red" : "unset" }} />
    </IconButton>
  );
}
