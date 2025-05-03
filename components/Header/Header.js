import Link from "next/link";
import Image from "next/image";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";

const navLinks = [
  { label: "Services", route: "#services" },
  { label: "Testimonials", route: "#testimonials" },
  { label: "Become a Creator", route: "#" },
  { label: "Partner with Us", route: "#" },
];

export default function Header() {
  return (
    <Box className={classes.container}>
      <AppBar
        position="static"
        sx={{
          borderRadius: "12px",
          backgroundColor: "#1e1f2a",
        }}
      >
        <Toolbar>
          <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="Affilyit ai" priority />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {navLinks.map((navLink) => {
              return (
                <Button
                  key={navLink.label}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    ":hover": {
                      bgcolor: "#282c34",
                    },
                  }}
                >
                  <Link href={navLink.route}>{navLink.label}</Link>
                </Button>
              );
            })}
          </Box>
          <Box className={classes["button_getStarted"]}>
            <Button
              sx={{
                display: "block",
                color: "white",
                backgroundColor: "#1976d2",
                width: "100px",
                height: "40px",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "60%" }}>
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
          eiusmod tempor
        </Typography>
      </Box>
      <Box sx={{ width: "40%" }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
          eiusmod tempor
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          display: "block",
          width: "150px",
          height: "50px",
        }}
      >
        Discover Now
      </Button>
    </Box>
  );
}
