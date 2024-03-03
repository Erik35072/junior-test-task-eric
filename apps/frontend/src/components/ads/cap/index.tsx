"use client";

import { useCallback, useContext, useState } from "react";
// context
import { FilterContext } from "@context/ads-filter";
import useSessionStorage from "@hooks/use-session-storage";
// components
import { Box, Paper, Typography } from "@mui/material";
import { BaseModal } from "src/components/common/modal";
import { SimpleButton } from "@commonComponents/buttons";
import Filter, { FILTER_STORAGE_KEY } from "./filter";

export default function AdsCap() {
  const { onFilter } = useContext(FilterContext);
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const [_, setFilters] = useSessionStorage(FILTER_STORAGE_KEY, {});
  const [openFilters, setOpenFilters] = useState(false);

  const handleFiltersOpen = () => {
    setOpenFilters(true);
  };

  const handleFiltersClose = () => {
    setOpenFilters(false);
  };

  const handleResetFilters = useCallback(() => {
    onFilter();
    setFilters({});
  }, [setFilters, onFilter]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "space-between", alignItems: "center", py: 2 }}>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Ads list</Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <SimpleButton onClick={handleResetFilters}>Reset Filters</SimpleButton>
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
