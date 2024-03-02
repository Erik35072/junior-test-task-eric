import { PropsWithChildren } from "react";
// components
import { Box, Divider } from "@mui/material";
import Filter from "./components/filter";

export default function AdsLayout({ children }: PropsWithChildren) {
  return (
    <Box className="page-max-w">
      <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
        <Filter />
        <Divider />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
