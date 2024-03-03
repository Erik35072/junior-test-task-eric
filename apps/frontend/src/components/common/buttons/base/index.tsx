import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SimpleButton({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Button
      sx={{
        bgcolor: "secondary.main",
        color: "common.white",
        borderRadius: 2,
        "&:hover": {
          bgcolor: "primary.main",
          color: "common.white"
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
