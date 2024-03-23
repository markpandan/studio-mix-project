import { Box, Button, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { buttonFont } from "../../theme";

interface Props {
  isOpen: boolean;
}

const XLButton = ({ children }: { children: string }) => (
  <Button variant="ghost" fontSize={"xl"}>
    {children}
  </Button>
);

const MenuItem = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        fontFamily={buttonFont}
      >
        <NavLink to="/">
          <XLButton>Home</XLButton>
        </NavLink>
        <NavLink to="/services">
          <XLButton>Services</XLButton>
        </NavLink>
        <NavLink to="/gallery">
          <XLButton>Gallery</XLButton>
        </NavLink>
        <NavLink to="/aboutus">
          <XLButton>About Us</XLButton>
        </NavLink>
        <NavLink to="/inquire">
          <PrimaryButton>Inquire</PrimaryButton>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default MenuItem;
