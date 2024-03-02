import { memo, PropsWithChildren } from "react";
import { useFormikContext } from "formik";
// components
import { TextFieldProps, Typography } from "@mui/material";
import BaseField, { BaseFieldProps } from "../base-field";

export interface FormikFieldProps extends BaseFieldProps {
  field_key: string;
  title?: string;
  label?: string;
}

const FormikField = ({
  field_key,
  input_bgcolor,
  title,
  label,
  children,
  ...props
}: PropsWithChildren<FormikFieldProps & TextFieldProps>) => {
  const { getFieldProps, errors } = useFormikContext<{ [key: string]: string | number }>();

  return (
    <>
      {label && <Typography sx={{ fontSize: 16, lineHeight: "19px", fontWeight: 500, color: "#414141" }}>{label}</Typography>}
      <BaseField
        {...getFieldProps(field_key)}
        error={Boolean(errors ? errors[field_key] : false)}
        helperText={errors ? errors[field_key] : "Unknown Error"}
        label={title}
        input_bgcolor={input_bgcolor}
        {...props}
      >
        {children}
      </BaseField>
    </>
  );
};

export default memo(FormikField);
