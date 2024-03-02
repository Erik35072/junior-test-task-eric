import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export default function AdsLayout({ children }: PropsWithChildren) {
  return (
    <Box className="page-max-w">
      <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
        <Box>filters</Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
