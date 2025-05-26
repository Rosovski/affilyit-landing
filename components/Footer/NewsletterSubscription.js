import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function NewsletterSubscription() {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#16161D",
        p: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.500" }}>
          Neque porro quisquam est qui dolorem ipsum quia dolor.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Your Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "grey.500" }} />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "#2c2c38",
              borderRadius: "8px",
              color: "#fff",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            textTransform: "none",
            borderRadius: "8px",
            px: 3,
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Paper>
  );
}
