import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../index.css";

interface Props {
  heading: string;
  reverseToggle: boolean;
  children: ReactNode;
  image?: string;
}

const ContentBlock = ({ heading, reverseToggle, children, image }: Props) => {
  return (
    <Box bgColor={"yellow.300"} py={5}>
      <Box className="defaultContainerSize" margin={"auto"}>
        <Stack
          direction={{
            base: "column",
            sm: reverseToggle ? "row-reverse" : "row",
          }}
          spacing={10}
        >
          <Box width={"100%"}>{image || "No Image"}</Box>
          <Box width={"100%"}>
            <Heading mb={4}>{heading}</Heading>
            <Text> {children}</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContentBlock;
