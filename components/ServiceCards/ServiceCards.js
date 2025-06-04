"use client";

import React, { Component } from "react";
import { Box, Typography, Button } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ServiceCard from "../Cards/ServiceCard";

import tiktokShopAffiliateCourseImg from "@/public/services/tiktok-shop-affiliate-course.jpg";
import affiliateBrandOpportunitiesImg from "@/public/services/affiliate-brand-opportunities.jpg";
import contentReviewChannelImg from "@/public/services/content-review-channel.jpg";
import privateCommunityImg from "@/public/services/private-community.jpg";
import weeklyGroupCoachingCallsImg from "@/public/services/weekly-group-coaching-calls.jpg";
import accessToAffilyitGPTImg from "@/public/services/access-to-AffilyitGPT.jpg";
import yourOwn11CoachImg from "@/public/services/your-own-11-coach.jpg";

import ultraViralityCourseImg from "@/public/services/ultra-virality-course.jpg";
import tiktokCreatorProgramCourseImg from "@/public/services/tiktok-creator-program-course.jpg";
import editing101CourseImg from "@/public/services/editing-101-course.jpg";
import toolsImg from "@/public/services/tools.jpg";
import documentsImg from "@/public/services/documents.jpg";
import resourcesImg from "@/public/services/resources.jpg";
import sistersChatImg from "@/public/services/sisters-chat.jpg";
import MillionViewsSuccessChecklistImg from "@/public/services/1M-views-success-checklist.jpg";

import { AffilyitBonuses, AffilyitServices } from "@/utils/constant";

import classes from "./servicecards.module.css";

const AffilyitServiceImgs = [
  tiktokShopAffiliateCourseImg,
  affiliateBrandOpportunitiesImg,
  contentReviewChannelImg,
  privateCommunityImg,
  weeklyGroupCoachingCallsImg,
  accessToAffilyitGPTImg,
  yourOwn11CoachImg,
];

const AffilyitBonusImgs = [
  ultraViralityCourseImg,
  tiktokCreatorProgramCourseImg,
  editing101CourseImg,
  toolsImg,
  documentsImg,
  resourcesImg,
  sistersChatImg,
  MillionViewsSuccessChecklistImg,
];

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
          // justifyContent: "space-between",
          gap: 3,
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
          }}
          className={classes["button-container"]}
        >
          <Button
            sx={{ color: "#808080" }}
            className={
              this.state.selectedService === "services"
                ? classes["button-selected"]
                : classes.button
            }
            onClick={() => this.handleButtonClick("services")}
          >
            Services
          </Button>
          <Button
            sx={{ color: "#808080" }}
            className={
              this.state.selectedService === "bonuses"
                ? classes["button-selected"]
                : classes.button
            }
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
                imgSrc={AffilyitServiceImgs[index]}
              />
            ))}
          {this.state.selectedService === "bonuses" &&
            AffilyitBonuses.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imgSrc={AffilyitBonusImgs[index]}
              />
            ))}
        </Carousel>
      </Box>
    );
  }
}

export default ServiceCards;
