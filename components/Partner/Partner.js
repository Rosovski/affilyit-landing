import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import classes from "./partner.module.css";

import curedIcon from "@/assets/icons/cured.png";
import drpawsIcon from "@/assets/icons/drpaws.png";
import beastbitesIcon from "@/assets/icons/beastbites.png";

export default function Partner() {
  return (
    <Box className={classes.container}>
      <Typography variant="body1">Trusted by our partners</Typography>
      <Stack direction="row" spacing={2}>
        <Image src={curedIcon} alt="partner cured" />
        <Image src={drpawsIcon} alt="partner drpaws" />
        <Image src={beastbitesIcon} alt="partner beastbites" />
      </Stack>
    </Box>
  );
}
