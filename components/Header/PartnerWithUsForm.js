"use client";

import { useFormState } from "react-dom";
import { partnerWithUs } from "@/lib/actions";

import { Box, TextField, InputLabel, Typography } from "@mui/material";
import classes from "./header.module.css";
import PartnerWithUsButton from "./PartnerWithUsButton";

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

          <Box>
            <InputLabel
              htmlFor="phone-number"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Phone Number <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="phone_number"
              id="phone-number"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="website"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Website <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="website"
              id="website"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="shop-link"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Tiktok Shop Link (if available)
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="shop_link"
              id="shop-link"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="revenue"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Product Revenue <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="revenue"
              id="revenue"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="isProductHalal"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Are your products halal? (Yes/No){" "}
              <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="is_product_halal"
              id="isProductHalal"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="partner-message"
              className={classes["text-field-label"]}
              sx={{ color: "white" }}
            >
              Tell us about your brand and why you'd like to partner with
              Affilyit <span className={classes["required"]}>*</span>
            </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              className={classes["text-field"]}
              name="partner_message"
              id="partner-message"
              slotProps={{
                input: {
                  sx: textFieldInputStyles,
                },
              }}
              multiline
              rows={3}
            />
          </Box>

          <Box className={classes["partner-button-container"]}>
            <PartnerWithUsButton />
          </Box>
        </Box>
        {state.message && (
          <Typography variant="body1">{state.message}</Typography>
        )}
      </form>
    </Box>
  );
}

const textFieldInputStyles = {
  backgroundColor: "white",
  borderRadius: "8px",
  color: "black",
};
