import { AppBar, Box, Typography } from "@mui/material";
import { NavLink } from "../common";

export default function Header() {
  return (
    <AppBar component="header" position="static" sx={{ py: { xs: 4, xl: 2 } }}>
      <Box
        sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", p: 0 }}
        className="page-max-w"
      >
        <NavLink to="/" withoutEffects>
          <Typography component="h1" sx={{ fontSize: { xs: 20, xl: 30 } }}>
            Logo
          </Typography>
        </NavLink>
        <NavLink to="/ads">Ads</NavLink>
      </Box>
    </AppBar>
  );
}
