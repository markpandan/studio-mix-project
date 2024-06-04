import { extendTheme } from "@chakra-ui/react";
import "@fontsource/archivo-black";
import "@fontsource/archivo/200.css";

export const defaultContainerSize = "container.xl";
export const defaultCardShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
export const defaultBorderRadius = "20";

export const projectColorPrimary = "yellow.300";
export const projectColorSecondary = "purple.500";
export const projectColorTertiary = "red.500";

export const imageDescriptionBgColor = "blackAlpha.400";
export const imageDescriptionTxtColor = "gray.300";

export const buttonFont = "'Alatsi', sans-serif";

export const jumbotronBackground_1 = "src/assets/jumbotron_image.jpg";

export const theme = extendTheme({
   fonts: {
      heading: `'Archivo Black', sans-serif`,
      body: `'Archivo', sans-serif`,
   },
});

export const webLogoSrc = "src/assets/studio_mix_logo.svg";
