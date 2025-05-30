import { Box } from "@mui/material";
import Header from "@/components/Header/Header";
import Partner from "@/components/Partner/Partner";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import TestimonialCards from "@/components/TestimonialCards/TestimonialCards";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <Partner />
      <ServiceCards />
      <TestimonialCards />
      <AboutUs />
      <Footer />
    </Box>
  );
}
