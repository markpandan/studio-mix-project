import { Box, Text, Center } from "@chakra-ui/react";
import ContentBlock from "../components/ContentBlock";

const AboutUs = () => {
  return (
    <>
      <Center h={"300px"} bgColor={"gray.100"}>
        <Text fontSize={"7xl"} fontWeight={"bold"} color={"purple.500"}>
          ABOUT US
        </Text>
      </Center>
      <ContentBlock heading="OUR JOURNEY" reverseToggle={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt
        arcu non sodales neque.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor
        eget dolor morbi. Feugiat nisl pretium fusce id velit.
      </ContentBlock>
    </>
  );
};

export default AboutUs;
