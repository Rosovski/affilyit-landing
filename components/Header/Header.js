"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "@/assets/logo-v2.png";
import classes from "./header.module.css";

const navLinks = [
  { label: "About Us", route: "#about-us" },
  { label: "The Accelerator Program", route: "#accelerator-program" },
  { label: "Testimonials", route: "#testimonials" },
  { label: "Become a Creator", route: "https://app.affilyit.ai" },
  { label: "Partner with Us", route: "#" },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              display: { xs: "none", sm: "flex" },
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
          <Box
            className={classes["button_getStarted"]}
            sx={{ flexGrow: { xs: 1, sm: 1, md: 0 } }}
          >
            <Button
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                color: "white",
                backgroundColor: "#1976d2",
                width: "100px",
                height: "40px",
              }}
            >
              <Link href="https://app.affilyit.ai">Apply Now</Link>
            </Button>
            <Button
              sx={{
                display: { xs: "block", sm: "none" },
                color: "white",
                width: "100px",
                height: "40px",
              }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ fontSize: "48px" }} />
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navLinks.map((navLink) => (
                <MenuItem
                  key={navLink.label}
                  onClick={handleCloseNavMenu}
                  sx={{ backgroundColor: "#282c34" }}
                  className={classes["menu-item"]}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    <Link href={navLink.route} className={classes["menu-link"]}>
                      {navLink.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "60%" }}>
        <Typography variant="h3" className={classes.title}>
          Launch Your Affiliate Career with TikTok Shop
        </Typography>
      </Box>
      <Box sx={{ width: "40%", color: "#808080" }} className={classes.subtitle}>
        <Typography variant="h6">
          Expert training, direct brand access, and paid opportunities—all in
          one place.
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
        <Link href="https://app.affilyit.ai">Apply Now</Link>
      </Button>
    </Box>
  );
}
