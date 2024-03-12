import { useState } from "react";
import { Circle, Flex } from "@chakra-ui/react";
import NavbarItem from "./NavbarItems";
import NavbarItemToggle from "./NavbarItemToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      className="defaultContainerFormat"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={5}
    >
      <Circle size={"40px"} bgColor={"tomato"}></Circle>
      <NavbarItemToggle toggle={toggle} isOpen={isOpen} />
      <NavbarItem isOpen={isOpen} />
    </Flex>
  );
};

export default Navbar;
