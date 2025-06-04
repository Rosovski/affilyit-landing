import React from "react";
import Image from "next/image";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import classes from "./ServiceCard.module.css";

export default function ServiceCard({ title, description, imgSrc }) {
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "#1E1E24",
        color: "#fff",
        borderRadius: 4,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-end",
        overflow: "hidden",
      }}
      className={classes["card-container"]}
    >
      <CardContent
        sx={{
          maxWidth: 400,
          textAlign: "left",
        }}
        className={classes["card-content"]}
      >
        <div className={classes["image-container"]}>
          <Image src={imgSrc} alt="" fill objectFit="cover" />
        </div>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: "block",
            width: "100px",
            height: "40px",
          }}
        >
          Discover More
        </Button>
      </CardContent>
    </Card>
  );
}
