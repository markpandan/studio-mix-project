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
         backgroundColor={"blackAlpha.400"}
         color={"gray.300"}
         paddingX={10}
         gap={1}
         zIndex={2}
      >
         <Text fontSize={"2xl"} fontWeight={"800"}>
            Lorem Ipsum
         </Text>
         <Text fontSize={"md"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor
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
