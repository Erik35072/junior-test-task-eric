import { Box } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps {
  to: string;
}

export default function NavLink({ to, children }: PropsWithChildren<LinkProps>) {
  return (
    <Box>
      <Link className="nav-link" href={to}>
        {children}
      </Link>
    </Box>
  );
}
