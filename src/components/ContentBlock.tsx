import { ReactNode } from "react";
import { Box, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { projectColorPrimary } from "../theme";
import "../index.css";

interface Props {
  children: ReactNode;
  heading: string;
  reverseToggle: boolean;
  primaryColor?: boolean;
  image?: string;
}

const ContentBlock = ({
  children,
  heading,
  reverseToggle,
  primaryColor = true,
  image,
}: Props) => {
  return (
    <Box bgColor={primaryColor ? projectColorPrimary : "gray.100"}>
      <Box className="defaultContainerFormat">
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
