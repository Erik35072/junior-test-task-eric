/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps {
  to: string;
  withoutEffects?: boolean;
}

export default function NavLink({ to, withoutEffects = false, children }: PropsWithChildren<LinkProps>) {
  return (
    <Box sx={{ p: 0.5 }}>
      <Link {...(!withoutEffects && { className: "nav-link" })} href={to}>
        {children}
      </Link>
    </Box>
  );
}
