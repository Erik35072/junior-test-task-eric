import React from "react";
import "./global.css";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import ToastProvider from "../providers/toast";
import theme from "../providers/mui";
import { Header, Footer } from "../components/layout";

export const metadata = {
  title: "Welcome to frontend",
  description: "Generated by create-nx-workspace"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ads project</title>
      </head>
      <body>
        <Header />
        <Box component="main" sx={{ minHeight: "80vh" }}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Box>
        <Footer />
      </body>
    </html>
  );
}
