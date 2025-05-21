"use client";

import React, { Component } from "react";
import { Box, Typography } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ServiceCard from "../Cards/ServiceCard";

import classes from "./servicecards.module.css";

class ServiceCards extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 30,
      },
    };
    return (
      <Box
        sx={{
          backgroundColor: "black",
          textAlign: "center",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "15vh" }}></Box>
        <Typography variant="h3">Services we offer</Typography>
        <Carousel
          responsive={responsive}
          ssr
          centerMode
          infinite={true}
          containerClass="first-carousel-container container"
          itemClass={classes.itemClass}
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </Carousel>
      </Box>
    );
  }
}

export default ServiceCards;
