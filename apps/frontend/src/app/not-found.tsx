import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    // className="flex items-center justify-center xs:h-screen"
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: 48, fontWeight: "bold", color: "red", mb: 4 }} component="h1">
          404 - Not Found
        </Typography>
        <Typography sx={{ color: "grey" }}>Oops! The page you are looking for might be in another castle.</Typography>
      </Box>
    </Box>
  );
}
