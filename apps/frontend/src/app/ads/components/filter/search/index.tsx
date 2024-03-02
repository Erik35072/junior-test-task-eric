import React from "react";
// components
import { FormikProvider, useFormik } from "formik";
import { Box } from "@mui/material";
import { FormikField } from "@commonComponents/control";

export default function Search() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

  return (
    <FormikProvider value={formik}>
      <Box>
        <FormikField
          field_key="search"
          size="small"
          title="Search"
          sx={{
            minWidth: 400
          }}
        />
      </Box>
    </FormikProvider>
  );
}
