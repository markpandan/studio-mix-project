import { Box, Center, Circle, Flex } from "@chakra-ui/react";
import FooterItem from "./FooterItem";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <Box className="defaultContainerFormat" py={5}>
      <Flex align={"center"} justify={"space-between"} pb={2}>
        <Circle size={"40px"} bgColor={"tomato"}></Circle>
        <FooterItem />
      </Flex>
      <FooterSocials />
      <Center>All Rights Reserved @ 2024</Center>
    </Box>
  );
};

export default Footer;
