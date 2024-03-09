import { Box, Icon } from "@chakra-ui/react";
import { BsList, BsX } from "react-icons/bs";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}
const NavbarItemToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <Icon as={BsX} boxSize={14} />
      ) : (
        <Icon as={BsList} boxSize={14} />
      )}
    </Box>
  );
};

export default NavbarItemToggle;
