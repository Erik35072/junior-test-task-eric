"use client";

import React from "react";
// components
import { Box, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { FormikField, FormikSubmitBtn } from "@commonComponents/control";
import Search from "./search";

export default function Filter() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

  const { handleSubmit } = formik;

  return (
    <Box sx={{ py: 2, display: "flex", flexDirection: "column", rowGap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: 20 }}>Filters</Typography>
        <Search />
      </Box>
      <FormikProvider value={formik}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", py: 1, gap: 2 }}>
          <Box sx={{ flexBasis: "40%", display: "flex", gap: 2 }}>
            <FormikField field_key="minPrice" size="small" title="Min price" />
            <FormikField field_key="maxPrice" size="small" title="Max price" />
          </Box>
          <Box sx={{ flexBasis: "25%" }}>
            <FormikField field_key="city" size="small" title="City" />
          </Box>
          <Box sx={{ flexBasis: "25%" }}>
            <FormikField field_key="district" size="small" title="District" />
          </Box>
          <Box sx={{ flexBasis: "10%" }}>
            <FormikSubmitBtn fullWidth>Apply filters</FormikSubmitBtn>
          </Box>
        </Box>
      </FormikProvider>
    </Box>
  );
}
