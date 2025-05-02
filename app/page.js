import { Box } from "@mui/material";
import Header from "@/components/Header/Header";
import Partner from "@/components/Partner/Partner";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import TestimonialCards from "@/components/TestimonialCards/TestimonialCards";
import Footer from "@/components/Footer/Footer";
import classes from "./page.module.css";

export default function Home() {
  return (
    <Box>
      <Header />
      <Partner />
      <ServiceCards />
      <Box className={classes.footer}>
        <TestimonialCards />
        <Footer />
      </Box>
    </Box>
  );
}
