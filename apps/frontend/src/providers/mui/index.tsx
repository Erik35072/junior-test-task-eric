"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02296b",
      dark: "#0b0624",
      light: "#ACA1DB"
    },
    secondary: {
      main: "#eb4d28"
    },

    error: {
      main: "#E15454"
    },
    text: {
      primary: "#000000",
      secondary: "#A5A5A5"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  }
});

export default theme;
