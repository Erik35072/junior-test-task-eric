"use client";

import { PropsWithChildren, useState } from "react";
// components
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { BaseModal } from "@commonComponents/modal";
import Filter from "./components/filter";

export default function AdsLayout({ children }: PropsWithChildren) {
  const [openFilters, setOpenFilters] = useState(false);

  const handleFiltersOpen = () => {
    setOpenFilters(true);
  };

  const handleFiltersClose = () => {
    setOpenFilters(false);
  };

  return (
    <Box className="page-max-w">
      <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center", py: 2 }}>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Ads list</Typography>
          <Button
            onClick={handleFiltersOpen}
            sx={{
              bgcolor: "secondary.main",
              color: "common.white",
              borderRadius: 2,
              "&:hover": {
                bgcolor: "primary.main",
                color: "common.white"
              }
            }}
          >
            Apply filters
          </Button>
        </Box>
        <Divider />
        <Box>{children}</Box>
      </Box>

      <BaseModal open={openFilters} onClose={handleFiltersClose}>
        <Paper sx={{ px: 4, py: 2 }}>
          <Filter />
        </Paper>
      </BaseModal>
    </Box>
  );
}
