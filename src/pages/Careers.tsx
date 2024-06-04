import { Box, HStack, Heading, VStack, Text, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { SubJumbotron } from "../components/Jumbotrons";
import { defaultContainerSize, projectColorPrimary, projectColorSecondary } from "../theme";
import { BsClock } from "react-icons/bs";
import { FaPesoSign } from "react-icons/fa6";

const Careers = () => {
   return (
      <>
         <SubJumbotron image="src/assets/jumbotron_image.jpg">CAREERS</SubJumbotron>
         <Box bgColor={projectColorPrimary}>
            <VStack
               maxW={defaultContainerSize}
               margin={"auto"}
               gap={10}
               py={5}
               alignItems={"stretch"}
            >
               <Heading color={projectColorSecondary} alignSelf={"start"}>
                  Join Our Team!
               </Heading>
               <SimpleGrid columns={[2, 3]} justifyContent={"space-between"} gap={5}>
                  {Array(6)
                     .fill(0)
                     .map((_, index) => (
                        <VStack
                           key={index}
                           borderRadius={"2xl"}
                           borderTop={"12px solid"}
                           borderColor={projectColorSecondary}
                           bgColor={"gray.100"}
                           width={"100%"}
                           p={5}
                           justifyContent={"space-between"}
                           alignItems={"start"}
                        >
                           <Box>
                              <Heading color={projectColorSecondary}> JOB TITLE </Heading>
                              <HStack justifyContent={"space-between"}>
                                 <Text>
                                    <Icon as={FaPesoSign} />
                                    18,000
                                 </Text>
                                 <Text>
                                    <Icon as={BsClock} />6 days ago
                                 </Text>
                              </HStack>
                              <Text mt={5}>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Faucibus pulvinar elementum integer enim neque volutpat ac
                                 tincidunt vitae. Ipsum dolor sit amet consectetur adipiscing elit
                                 duis tristique.
                              </Text>
                           </Box>
                           <Box>
                              <Button variant={"ghost"}>
                                 <Text>More Details -&gt;</Text>
                              </Button>
                           </Box>
                        </VStack>
                     ))}
               </SimpleGrid>
            </VStack>
         </Box>
      </>
   );
};

export default Careers;
