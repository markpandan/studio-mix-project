import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  index: number;
  hoverIndex: number;
}
const CollageCardDetails = ({ index, hoverIndex }: Props) => {
  return (
    <Box
      position="relative"
      bottom={0}
      width="100%"
      height="100px"
      backgroundColor={"rgba(0, 0, 255, 0.2)"}
      transform={index == hoverIndex ? "translateY(0)" : "translateY(100%)"}
      transition="transform .30s ease-in"
    >
      <Heading>Test</Heading>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi
        sunt? Alias labore, numquam, quos ipsa dolorem velit corrupti expedita
        commodi voluptatum, perspiciatis architecto ab asperiores! Fuga possimus
        aliquid vel!
      </Text>
    </Box>
  );
};

export default CollageCardDetails;
