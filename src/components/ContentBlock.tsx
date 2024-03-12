import { Box, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
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
    <Box bgColor={"yellow.300"}>
      <Box className="defaultContainerFormat" margin={"auto"}>
        <Stack
          direction={{
            base: "column",
            sm: reverseToggle ? "row-reverse" : "row",
          }}
          spacing={10}
        >
          <Skeleton height={"xs"} width={"2xl"} borderRadius={20} />
          <Box width={"100%"} textAlign={reverseToggle ? "end" : "start"}>
            <Heading mb={4} color={"purple.500"}>
              {heading}
            </Heading>
            <Text> {children}</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContentBlock;
