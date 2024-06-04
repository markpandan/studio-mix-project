import { Box, Heading, VStack } from "@chakra-ui/react";
import { SubJumbotron } from "../components/Jumbotrons";
import { defaultContainerSize, projectColorPrimary, projectColorSecondary } from "../theme";

const Careers = () => {
   return (
      <>
         <SubJumbotron image="src/assets/jumbotron_image.jpg">CAREERS</SubJumbotron>
         <Box bgColor={projectColorPrimary}>
            <VStack maxW={defaultContainerSize} margin={"auto"} gap={10} py={5}>
               <Heading color={projectColorSecondary} alignSelf={"start"}>
                  Join Our Team!
               </Heading>
               {Array(3)
                  .fill(0)
                  .map((_, index) => (
                     <Box
                        key={index}
                        borderRadius={"xl"}
                        borderLeft={"12px solid"}
                        borderColor={projectColorSecondary}
                        height={"200px"}
                        bgColor={"gray.100"}
                        width={"100%"}
                     />
                  ))}
            </VStack>
         </Box>
      </>
   );
};

export default Careers;
