import { AppBar, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar component="footer" position="static" sx={{ py: { xs: 4, xl: 2 } }}>
      <Box className="page-max-w">
        <Typography>© 2024 All rights reserved.</Typography>
      </Box>
    </AppBar>
  );
}
