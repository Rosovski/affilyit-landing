import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
      id="about-us"
    >
      <Typography variant="h3">About Us</Typography>
      <Typography variant="body1" sx={{ width: "50%" }}>
        Affilyit LLC is a premier affiliate marketing agency specializing in
        TikTok Shop. We provide expert training, hands-on support, and a
        streamlined path for both creators and brands to succeed. Our creators
        learn to produce high-converting marketing content and gain direct
        access to brands and products—equipping them with the skills,
        strategies, and insights needed to become top-performing affiliate
        marketers.
      </Typography>
      <Typography variant="body1" sx={{ width: "50%" }}>
        Our partner brands benefit from access to a curated community of
        motivated and trained creators who are supported by expert coaches to
        consistently produce high-converting content. As a designated TikTok
        Shop Partner and Affiliate Partner, we offer brands the unique
        opportunity to scale their presence through a dedicated team of salaried
        creators, ensuring consistent promotion and performance. Our experienced
        team also provides hands-on TikTok Shop support, streamlining
        onboarding, campaign management, and growth strategies to help brands
        drive sales and build lasting momentum on the platform.
      </Typography>
    </Box>
  );
}
