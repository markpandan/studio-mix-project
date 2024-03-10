import { Box, Heading, VStack, Text, Center } from "@chakra-ui/react";
import { ReactNode } from "react";
import { defaultContainerSize } from "../theme";

interface Props {
  heading: string;
  children: ReactNode;
  image?: string;
}

const ContentBlockVertical = ({ heading, children, image }: Props) => {
  return (
    <Box bgColor={"yellow.300"} py={5}>
      <Box maxW={defaultContainerSize} margin={"auto"} textAlign={"center"}>
        <VStack direction={"column"} spacing={10}>
          <Heading mb={4} color={"purple.500"}>
            {heading}
          </Heading>
          <Box width={"100%"}>{image || "No Image"}</Box>
          <Text> {children}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default ContentBlockVertical;
