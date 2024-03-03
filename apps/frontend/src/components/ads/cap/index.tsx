"use client";

import { useState } from "react";
// components
import { Box, Button, Paper, Typography } from "@mui/material";
import { BaseModal } from "src/components/common/modal";
import Filter from "./filter";

export default function AdsCap() {
  const [openFilters, setOpenFilters] = useState(false);

  const handleFiltersOpen = () => {
    setOpenFilters(true);
  };

  const handleFiltersClose = () => {
    setOpenFilters(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "space-between", alignItems: "center", py: 2 }}>
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
      <BaseModal open={openFilters} onClose={handleFiltersClose}>
        <Paper sx={{ px: 4, py: 2, width: { xs: "90vw", sm: "60vw", md: "auto" } }}>
          <Filter closeModal={handleFiltersClose} />
        </Paper>
      </BaseModal>
    </Box>
  );
}
