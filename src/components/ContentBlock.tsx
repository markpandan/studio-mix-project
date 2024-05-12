import { Box, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../index.css";
import { projectColorPrimary } from "../theme";

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
               <Skeleton height={"xs"} width={"100%"} borderRadius={20} />
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
