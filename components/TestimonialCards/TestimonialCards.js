import { Box, Typography } from "@mui/material";
import ServiceCard from "../Cards/ServiceCard";
import classes from "./testimonialcards.module.css";

export default function TestimonialCards() {
  return (
    <Box className={classes.container} id="testimonials">
      <Typography variant="h3">
        What our clients have to say about us
      </Typography>
      <Box className={classes["card-collection"]}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Box>
    </Box>
  );
}
