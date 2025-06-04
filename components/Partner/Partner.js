import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import classes from "./partner.module.css";

import curedIcon from "@/assets/icons/cured.png";
import drpawsIcon from "@/assets/icons/drpaws.png";
import beastbitesIcon from "@/assets/icons/beastbites.png";
import dhikrbandsIcon from "@/assets/icons/dhikrbands.png";
import goliIcon from "@/assets/icons/goli.png";
import mdrnremediesIcon from "@/assets/icons/mdrnremedies.png";
import sunnasuplementsIcon from "@/assets/icons/sunnasuplements.png";
import vitalsourceIcon from "@/assets/icons/vitalsource.png";
import yaynutsIcon from "@/assets/icons/yaynuts.png";

export default function Partner() {
  return (
    <Box className={classes.container}>
      <Typography variant="body1">Trusted by our partners</Typography>
      <Box className={classes.carousel}>
        <Box className={classes["carousel-track"]}>
          <Image src={curedIcon} alt="partner cured" />
          <Image src={drpawsIcon} alt="partner drpaws" />
          <Image src={beastbitesIcon} alt="partner beastbites" />
          <Image src={dhikrbandsIcon} alt="partner dhikrbands" />
          <Image src={goliIcon} alt="partner goli" />
          <Image src={mdrnremediesIcon} alt="partner mdrnremedies" />
          <Image src={sunnasuplementsIcon} alt="partner sunnasuplements" />
          <Image src={vitalsourceIcon} alt="partner vitalsource" />
          <Image src={yaynutsIcon} alt="partner yaynuts" />

          <Image src={curedIcon} alt="partner cured" />
          <Image src={drpawsIcon} alt="partner drpaws" />
          <Image src={beastbitesIcon} alt="partner beastbites" />
          <Image src={dhikrbandsIcon} alt="partner dhikrbands" />
          <Image src={goliIcon} alt="partner goli" />
          <Image src={mdrnremediesIcon} alt="partner mdrnremedies" />
          <Image src={sunnasuplementsIcon} alt="partner sunnasuplements" />
          <Image src={vitalsourceIcon} alt="partner vitalsource" />
          <Image src={yaynutsIcon} alt="partner yaynuts" />
        </Box>
      </Box>
    </Box>
  );
}
