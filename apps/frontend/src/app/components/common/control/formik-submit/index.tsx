import React, { PropsWithChildren, memo } from "react";
// components
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

const FormikSubmit = ({ loading, children, ...props }: PropsWithChildren<LoadingButtonProps>) => (
  <LoadingButton
    variant="contained"
    type="submit"
    loading={loading}
    sx={{
      bgcolor: "primary.main",
      color: "primary.light",
      fontSize: { xs: 13, xl: 12 },
      fontWeight: 600,
      height: "100%",
      lineHeight: "19px",
      py: { xs: 1, md: 1 },
      whiteSpace: "nowrap",
      "&:hover": {
        color: "common.white"
      }
    }}
    {...props}
  >
    {children}
  </LoadingButton>
);

export default memo(FormikSubmit);
