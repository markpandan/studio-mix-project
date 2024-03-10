import { Text, Center } from "@chakra-ui/react";
import ContentBlock from "../components/ContentBlock";
import EmployeeBlock from "../components/EmployeeBlock";
import ContentBlockVertical from "../components/ContentBlockVertical";

const AboutUs = () => {
  const family = [
    {
      name: "Mercy Magbanua",
      role: "Owner",
      image: "",
    },
    {
      name: "Zaldy Cuevas",
      role: "Assistant",
      image: "",
    },
  ];

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
      <EmployeeBlock family={family} />
      <ContentBlockVertical heading="WE STRIVE TO BECOME THE BEST!">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt
        arcu non sodales neque.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor
        eget dolor morbi. Feugiat nisl pretium fusce id velit.
      </ContentBlockVertical>
    </>
  );
};

export default AboutUs;
