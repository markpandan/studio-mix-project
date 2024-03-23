import { extendTheme } from "@chakra-ui/react";
import "@fontsource/archivo-black";
import "@fontsource/archivo/200.css";

export const defaultContainerSize = "container.xl";
export const projectColorPrimary = "yellow.300";
export const projectColorSecondary = "purple.500";
export const projectColorTertiary = "red.500";

export const buttonFont = "'Alatsi', sans-serif";

export const theme = extendTheme({
  fonts: {
    heading: `'Archivo Black', sans-serif`,
    body: `'Archivo', sans-serif`,
  },
});

export default theme;
