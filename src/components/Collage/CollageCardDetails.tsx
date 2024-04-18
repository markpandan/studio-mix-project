import { Badge, Box, HStack, Heading } from "@chakra-ui/react";

interface Props {
  index: number;
  hoverIndex: number;
}

// NOTICE: Deprecated
// TODO: Maybe add a share function next time
const CollageCardDetails = ({ index, hoverIndex }: Props) => {
  return (
    <Box
      bottom={0}
      width="100%"
      height="75px"
      backgroundColor={"whiteAlpha.400"}
      transform={index == hoverIndex ? "translateY(0)" : "translateY(100%)"}
      transition="transform .45s ease-out"
      paddingX={[2, 4]}
      paddingY={2}
    >
      <HStack>
        <Badge variant="subtle" colorScheme="green">
          Art
        </Badge>
        <Badge variant="subtle" colorScheme="cyan">
          Scenery
        </Badge>
      </HStack>
      <Heading mt={1} size={"md"}>
        The Bread and The Girl
      </Heading>
    </Box>
  );
};

export default CollageCardDetails;
