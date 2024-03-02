import { AppBar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar component="footer" position="static" sx={{ p: { xs: 4, xl: 2 } }}>
      <Typography>© 2024 All rights reserved.</Typography>
    </AppBar>
  );
}
