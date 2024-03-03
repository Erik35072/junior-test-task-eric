import { Box, Typography } from "@mui/material";

const Index = () => (
  <Box sx={{ display: "flex", height: "80vh", alignItems: "center", justifyContent: "center" }}>
    <Typography sx={{ fontSize: { xs: 40, md: 60 }, fontFamily: "cursive", fontWeight: "bold" }}>
      Welcome to Ads Project
    </Typography>
  </Box>
);

export default Index;
