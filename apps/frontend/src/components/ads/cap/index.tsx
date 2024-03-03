"use client";

import { useContext, useState } from "react";
// context
import { FilterContext } from "@context/ads-filter";
// components
import { Box, Paper, Typography } from "@mui/material";
import { BaseModal } from "src/components/common/modal";
import { SimpleButton } from "@commonComponents/buttons";
import Filter from "./filter";

export default function AdsCap() {
  const { onFilter } = useContext(FilterContext);
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
        <Box sx={{ display: "flex", gap: "10px" }}>
          <SimpleButton onClick={() => onFilter()}>Reset Filters</SimpleButton>
          <SimpleButton onClick={handleFiltersOpen}>Apply Filters</SimpleButton>
        </Box>
      </Box>
      <BaseModal open={openFilters} onClose={handleFiltersClose}>
        <Paper sx={{ px: 4, py: 2, width: { xs: "90vw", sm: "60vw", md: "auto" } }}>
          <Filter closeModal={handleFiltersClose} />
        </Paper>
      </BaseModal>
    </Box>
  );
}
