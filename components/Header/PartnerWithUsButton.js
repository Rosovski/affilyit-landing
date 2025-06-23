"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@mui/material";

export default function PartnerWithUsButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="contained"
      sx={{
        display: "block",
        width: "120px",
        height: "40px",
        borderRadius: "8px",
        "&.Mui-disabled": {
          background: "grey",
          color: "white",
        },
      }}
      disabled={pending}
      type="submit"
    >
      Partner with Us
    </Button>
  );
}
