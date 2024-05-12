import { Box, Center, Image, Flex } from "@chakra-ui/react";
import FooterItem from "./FooterItem";
import FooterSocials from "./FooterSocials";
import { webLogoSrc } from "../../theme";

const Footer = () => {
   return (
      <Box className="defaultContainerFormat" py={5}>
         <Flex align={"center"} justify={"space-between"} pb={2}>
            <Image
               src={webLogoSrc}
               width={"150px"}
               height={"50px"}
               objectFit={"fill"}
            />
            <FooterItem />
         </Flex>
         <FooterSocials />
         <Center>All Rights Reserved @ 2024</Center>
      </Box>
   );
};

export default Footer;
