import { Box, LinearProgress } from "@mui/material";

export default function LinearLoading() {
  return (
    <Box sx={{ width: "100%", my: 1 }}>
      <LinearProgress sx={{ width: "100%", height: "5px" }} />
    </Box>
  );
}
