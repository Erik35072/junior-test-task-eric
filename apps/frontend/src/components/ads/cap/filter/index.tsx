"use client";

import React, { useContext } from "react";
// components
import { Box, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { FormikField, FormikSubmitBtn } from "src/components/common/control";
// types
import { AdFilterTypes } from "src/types/ad/filters";
import { FilterContext } from "@context/ads-filter";
import useSessionStorage from "@hooks/use-session-storage";

interface Props {
  closeModal: () => void;
}

export const FILTER_STORAGE_KEY = "filters";

export default function Filter({ closeModal }: Props) {
  const { onFilter, filtering } = useContext(FilterContext);
  const [ssFilters, setSsFilters] = useSessionStorage<AdFilterTypes>(FILTER_STORAGE_KEY, {});

  const formik = useFormik<AdFilterTypes>({
    initialValues: {
      maxPrice: ssFilters?.maxPrice ?? "",
      minPrice: ssFilters?.minPrice ?? "",
      search: ssFilters?.search ?? "",
      city: ssFilters?.city ?? "",
      district: ssFilters?.district ?? ""
    },
    onSubmit: values => {
      const filters: { [key: string]: string } = {};

      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          filters[key] = value;
        }
      });

      const handlers = new Promise(resolve => {
        onFilter(filters as AdFilterTypes);
        setSsFilters(filters as AdFilterTypes);

        resolve(null);
      });

      handlers.then(() => closeModal());
    }
  });

  const { handleSubmit } = formik;

  return (
    <Box sx={{ py: 2, display: "flex", flexDirection: "column", rowGap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: 20 }}>Select filters</Typography>
      </Box>
      <FormikProvider value={formik}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", py: 1, gap: 2 }}>
          <Box sx={{ flexBasis: "40%", display: "flex", gap: 2 }}>
            <FormikField type="number" field_key="minPrice" size="small" title="Min price" />
            <FormikField type="number" field_key="maxPrice" size="small" title="Max price" />
          </Box>
          <Box sx={{ flexBasis: "25%" }}>
            <FormikField field_key="city" size="small" title="City" />
          </Box>
          <Box sx={{ flexBasis: "25%" }}>
            <FormikField field_key="district" size="small" title="District" />
          </Box>
          <Box sx={{ flexBasis: "25%" }}>
            <FormikField field_key="search" size="small" title="Search" />
          </Box>
          <Box sx={{ flexBasis: "10%" }}>
            <FormikSubmitBtn loading={filtering} fullWidth>
              Apply
            </FormikSubmitBtn>
          </Box>
        </Box>
      </FormikProvider>
    </Box>
  );
}
