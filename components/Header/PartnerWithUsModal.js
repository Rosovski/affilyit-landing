import { Modal, Box, Typography } from "@mui/material";
import classes from "./header.module.css";
import PartnerWithUsForm from "./PartnerWithUsForm";

export default function PartnerWithUsModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes["modal-container"]}>
        <Typography variant="h4">Partner with Affilyit</Typography>
        <PartnerWithUsForm />
      </Box>
    </Modal>
  );
}
