"use client";

import React, { Component } from "react";
import { Box, Typography, Button } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ServiceCard from "../Cards/ServiceCard";

import { AffilyitBonuses, AffilyitServices } from "@/utils/constant";

import classes from "./servicecards.module.css";

class ServiceCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: "services",
    };
  }

  handleButtonClick(selectedService) {
    this.setState({ selectedService });
  }

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
        id="accelerator-program"
      >
        <Box sx={{ height: "15vh" }}></Box>
        <Typography variant="h3">The Affilyit Accelerator Program</Typography>
        <Typography variant="body1">
          your fast track to earning money on TikTok Shop
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            mt: 8,
          }}
          className={classes["button-container"]}
        >
          <Button
            sx={{ color: "#808080" }}
            className={classes.button}
            onClick={() => this.handleButtonClick("services")}
          >
            Services
          </Button>
          <Button
            sx={{ color: "#808080" }}
            className={classes.button}
            onClick={() => this.handleButtonClick("bonuses")}
          >
            Bonuses
          </Button>
        </Box>
        <Carousel
          responsive={responsive}
          ssr
          centerMode
          infinite={true}
          containerClass="first-carousel-container container"
          itemClass={classes.itemClass}
        >
          {this.state.selectedService === "services" &&
            AffilyitServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          {this.state.selectedService === "bonuses" &&
            AffilyitBonuses.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
        </Carousel>
      </Box>
    );
  }
}

export default ServiceCards;
