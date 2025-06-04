import React from "react";
import { Box, Typography, Avatar, Card } from "@mui/material";
import classes from "./TestimonialCard.module.css";

export default function TestimonialCard({ name, review, imgSrc }) {
  return (
    <Card
      sx={{
        backgroundColor: "#1E1E24",
        color: "#fff",
        borderRadius: 4,
        textAlign: "center",
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        gap: 2,
      }}
      className={classes["card-container"]}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            bgcolor: "#ccc",
          }}
          src={imgSrc}
          alt="profile picture"
        />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 3,
          maxWidth: 400,
          margin: "0 auto",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        {review}
      </Typography>
    </Card>
  );
}
