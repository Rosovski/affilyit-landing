import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/MailOutline";
import classes from "./NewsletterSubscription.module.css";

export default function NewsletterSubscription() {
  return (
    <Box className={classes.container}>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
          Subscribe to our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.500" }}>
          Neque porro quisquam est qui dolorem ipsum quia dolor.
        </Typography>
      </Box>

      <Box sx={{ width: "20vw" }}></Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexGrow: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Your Email"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "#2c2c38",
                borderRadius: "8px",
                paddingLeft: "8px",
                color: "#fff",
              },
            },
          }}
          className={classes["text-field"]}
        />
        <Button
          variant="contained"
          sx={{
            display: "block",
            width: "120px",
            height: "40px",
            borderRadius: "8px",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}
