import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { webLogoSrc } from "../../theme";
import NavbarItemToggle from "./NavbarItemToggle";
import NavbarItem from "./NavbarItems";

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
         <Link to={"/"}>
            <Image
               src={webLogoSrc}
               width={"150px"}
               height={"50px"}
               objectFit={"fill"}
               alt="Studio Mix Logo"
            />
         </Link>
         <NavbarItemToggle toggle={toggle} isOpen={isOpen} />
         <NavbarItem isOpen={isOpen} />
      </Flex>
   );
};

export default Navbar;
