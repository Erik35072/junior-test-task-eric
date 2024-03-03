import { memo } from "react";
// components
import { Box, Divider, Typography } from "@mui/material";

export interface NoResultProps {
  alternativeTitle?: string;
  withoutDivider?: boolean;
}

function NoResult({ alternativeTitle, withoutDivider }: NoResultProps) {
  return (
    <Box sx={{ width: "100%" }}>
      {!withoutDivider && <Divider />}
      <Box sx={{ py: 3 }}>
        <Typography sx={{ textAlign: "center" }}>{alternativeTitle ?? "No Results"}</Typography>
      </Box>
    </Box>
  );
}

export default memo(NoResult);
