import { Box, Typography } from "@mui/material";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Typography variant="body1">
          @2025 Affilyit; All Rights Reserved.
        </Typography>
        <Box className={classes.links}>
          <Typography variant="body2">Privacy</Typography>
          <Typography variant="body2">Terms</Typography>
          <Typography variant="body2">Cookie</Typography>
        </Box>
        <Box className={classes.socialmedias}>
          <Typography variant="body1">Twitter</Typography>
          <Typography variant="body1">Instagram</Typography>
        </Box>
      </Box>
    </Box>
  );
}
