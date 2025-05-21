import React from "react";
import { Box, Typography, Avatar, Card } from "@mui/material";
import classes from "./TestimonialCard.module.css";

export default function TestimonialCard() {
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
          src="/joe-biden.jpg"
          alt="profile picture"
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mb: 3,
          maxWidth: 400,
          margin: "0 auto",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula
        condimentum nunc, a semper elit luctus id. Duis fringilla enim non neque
        aliquet, ut efficitur nunc lacinia. Etiam ornare eget nisi.
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
        Lorem ipsum dolor sit consectetur adipiscing elit Etiam vehicula
        condimentum nunc. Duis fringilla enim non neque aliquet, ut efficitur
        nunc lacinia. Etiam ornare eget nisi fringilla placerat. 🔥
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img
          src="/biden-signature.png"
          alt="Signature"
          style={{ maxWidth: 150, opacity: 0.6 }}
        />
      </Box>
    </Card>
  );
}
