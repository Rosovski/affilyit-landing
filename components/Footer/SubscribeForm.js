"use client";

import { useFormState } from "react-dom";
import { subscribeNewsLetter } from "@/lib/actions";

import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/MailOutline";
import classes from "./NewsletterSubscription.module.css";
import SubscribeButton from "./SubscribeButton";

export default function SubscribeForm() {
  const [state, formAction] = useFormState(subscribeNewsLetter, {
    message: null,
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "left",
      }}
    >
      <form action={formAction}>
        <Box sx={{ display: "flex", gap: 1 }}>
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
            name="email"
          />
          <SubscribeButton />
        </Box>
      </form>
      {state.message && (
        <Typography variant="body1">{state.message}</Typography>
      )}
    </Box>
  );
}
