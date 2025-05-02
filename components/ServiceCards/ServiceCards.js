import { Box, Typography } from "@mui/material";
import ServiceCard from "../Cards/ServiceCard";
import classes from "./servicecards.module.css";

export default function ServiceCards() {
  return (
    <Box className={classes.container} id="services">
      <Typography variant="h3">Services we offer</Typography>
      <Box className={classes["card-collection"]}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Box>
    </Box>
  );
}
