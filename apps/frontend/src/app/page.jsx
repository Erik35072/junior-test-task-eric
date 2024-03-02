"use client";

import React, { useCallback } from "react";
import { Button, Box } from "@mui/material";
import styles from "./index.module.scss";
import Api from "../api";

const Index = () => {
  const fetchAds = useCallback(() => {
    const fetchData = async () => {
      const { results } = await Api.ads.getAds();
      console.log(results);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Box alignContent="center">
        <h1>And here it starts...</h1>
        <Button onClick={fetchAds} variant="outlined">
          Send an API request
        </Button>
      </Box>
    </div>
  );
};

export default Index;
