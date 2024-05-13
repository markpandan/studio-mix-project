import { Box, Heading, Image, Skeleton, Text, VStack } from "@chakra-ui/react";
import { defaultContainerSize, projectColorPrimary } from "../theme";
import Props from "./props";

// NOTE: reverseToggle parameter is not working for now.
const ContentBlockVertical = ({
   children,
   heading,
   reverseToggle,
   primaryColor,
   image,
}: Props) => {
   return (
      <Box bgColor={primaryColor ? projectColorPrimary : "gray.100"} py={5}>
         <Box maxW={defaultContainerSize} margin={"auto"} textAlign={"center"}>
            <VStack
               direction={reverseToggle ? "column-reverse" : "column"}
               spacing={10}
            >
               <Heading mb={4} color={"purple.500"}>
                  {heading}
               </Heading>
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
               <Text> {children}</Text>
            </VStack>
         </Box>
      </Box>
   );
};

export default ContentBlockVertical;
