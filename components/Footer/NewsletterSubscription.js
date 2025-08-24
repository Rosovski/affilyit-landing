import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "./NewsletterSubscription.module.css";
import SubscribeForm from "./SubscribeForm";

export default function NewsletterSubscription() {
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          textAlign: "left",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
          Subscribe to our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.500" }}>
          Neque porro quisquam est qui dolorem ipsum quia dolor.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "20vw",
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      ></Box>

      <SubscribeForm sx={{ flexGrow: 1 }} />
    </Box>
  );
}
