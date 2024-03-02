import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export default function AdsLayout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>filters</Box>
      <Box>{children}</Box>
    </Box>
  );
}
