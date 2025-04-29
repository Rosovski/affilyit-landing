import { Box } from "@mui/material";
import Header from "@/components/Header/Header";
import Partner from "@/components/Partner/Partner";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import TestimonialCards from "@/components/TestimonialCards/TestimonialCards";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Partner />
      <ServiceCards />
      <TestimonialCards />
      <Footer />
    </Box>
  );
}
