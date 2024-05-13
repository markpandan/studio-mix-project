import { Box, Heading, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { projectColorPrimary } from "../theme";
import Props from "./props";
import "../index.css";

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
               {image ? (
                  <Image
                     h={"xs"}
                     width={"100%"}
                     borderRadius={20}
                     src={image.src}
                     alt={image.alt}
                     objectFit={"cover"}
                  />
               ) : (
                  <Skeleton height={"xs"} width={"100%"} borderRadius={20} />
               )}
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
