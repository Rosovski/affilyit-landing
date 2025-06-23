"use client";

import { useFormState } from "react-dom";
import { partnerWithUs } from "@/lib/actions";

import { Box, TextField, InputLabel } from "@mui/material";
import classes from "./header.module.css";

export default function PartnerWithUsForm() {
  const [state, formAction] = useFormState(partnerWithUs, {
    message: null,
  });

  return (
    <Box>
      <form action={formAction}>
        <Box
          sx={{
            textAlign: "left",
            color: "white",
          }}
        >
          <Box>
            <InputLabel
              htmlFor="name"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Name <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="name"
              id="name"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="email"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Email <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="email"
              id="email"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>
        </Box>
      </form>
    </Box>
  );
}

const textFieldInputStyles = {
  backgroundColor: "white",
  borderRadius: "8px",
  color: "black",
};
