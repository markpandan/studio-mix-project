import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { projectColorPrimary, projectColorTertiary } from "../../theme";
import CarouselIndicators from "./CarouselIndicators";

interface Prop {
  children: React.ReactNode;
}
type Props = Prop[];

// Make the description to be transparent
const Carousel = () => {
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <Flex
          borderRadius={20}
          bgColor={"white"}
          height={"400px"}
          overflow={"hidden"}
          direction={"column"}
          justify={"end"}
        >
          <HStack
            position={"inherit"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            margin={"auto"}
          >
            <Icon as={BsArrowLeft} />
            <Icon as={BsArrowRight} />
          </HStack>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Potenti nullam ac tortor{" "}
            </Text>
            <CarouselIndicators></CarouselIndicators>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Carousel;
