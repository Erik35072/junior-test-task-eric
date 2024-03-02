// components
import { Box } from "@mui/material";
import { AdCard } from "../../components/ads";
import AdsCap from "../../components/ads/cap";

export default function Ads() {
  return (
    <Box>
      <AdsCap />
      <Box
        sx={{
          display: "grid",
          py: 5,
          gap: "20px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(4, 250px)",
          gridAutoRows: "250px"
        }}
      >
        <Box>
          <AdCard
            id="1"
            title="Card titleas dasd asd"
            city="Moscow"
            price="200"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bLg1NQ7hxBmxr6mbk1fkQGv-a6f8QskCSmZlTK-3fg&s"
          />
        </Box>
      </Box>
    </Box>
  );
}
