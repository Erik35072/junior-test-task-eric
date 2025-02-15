import { memo, PropsWithChildren } from "react";
// components
import { TextField, TextFieldProps } from "@mui/material";

export interface BaseFieldProps {
  input_bgcolor?: string;
}

const BaseField = ({ input_bgcolor = "200", ...props }: PropsWithChildren<BaseFieldProps & TextFieldProps>) => (
  <TextField
    fullWidth
    sx={{
      "& div": { bgcolor: `grey.${input_bgcolor}`, borderRadius: "8px" },
      "& input": { fontSize: { xs: 13, xl: 16 }, lineHeight: "12px", px: { xs: 1, xl: 2 } }
    }}
    {...props}
  />
);

export default memo(BaseField);
