"use client";

import React, { Component } from "react";
import { Box, Typography } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialCard from "../Cards/TestimonialCard";

import { AffilyitTestimonials } from "@/utils/constant";

import classes from "./testimonialcards.module.css";

class ServiceCards extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
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
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id="testimonials"
      >
        <Box sx={{ height: "15vh" }}></Box>
        <Typography variant="h3">
          What our clients have to say about us
        </Typography>
        <Carousel
          responsive={responsive}
          ssr
          centerMode
          infinite={true}
          containerClass="first-carousel-container container"
          itemClass={classes.itemClass}
        >
          {AffilyitTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </Carousel>
        <Box sx={{ height: "15vh" }}></Box>
      </Box>
    );
  }
}

export default ServiceCards;
