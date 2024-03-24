import { VStack, Heading, Text } from "@chakra-ui/react";
import { projectColorTertiary } from "../../theme";
import CarouselIndicators from "./CarouselIndicators";

interface Props {
  activeIndex: number;
  size: number;
  handleClick: (index: number) => void;
}

const CarouselDescriptions = ({ activeIndex, size, handleClick }: Props) => {
  return (
    <VStack
      borderTop={"2px solid"}
      borderColor={projectColorTertiary}
      alignItems={"start"}
      height={"130px"}
      bgColor={"gray.300"}
      paddingX={4}
      paddingY={2}
      opacity={0.8}
      spacing={4}
    >
      <Heading>Lorem Ipsum</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac
        tortor{" "}
      </Text>
      <CarouselIndicators
        select={activeIndex}
        size={size}
        onClick={(index) => handleClick(index)}
      ></CarouselIndicators>
    </VStack>
  );
};

export default CarouselDescriptions;
