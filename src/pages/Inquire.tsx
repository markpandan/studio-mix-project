import { Box, HStack, Heading, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { BsGeoAlt } from "react-icons/bs";
import SubJumbotron from "../components/Jumbotrons/SubJumbotron";
import {
   defaultContainerSize,
   projectColorPrimary,
   projectColorSecondary,
   projectColorTertiary,
   jumbotronBackground_1,
} from "../theme";

// TODO: Make a Placeholder first while the iframe is not avaialable yet
const Inquire = () => {
   return (
      <>
         <SubJumbotron image={jumbotronBackground_1}>INQUIRE</SubJumbotron>
         <Box bgColor={projectColorPrimary}>
            <VStack spacing={5} maxW={defaultContainerSize} margin={"auto"} py={5}>
               <Heading color={projectColorSecondary} alignSelf={"start"}>
                  OUR LOCATION
               </Heading>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1735.8236047097416!2d121.0188298301581!3d14.465638946133565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce4680636c11%3A0xf9fe9f09c53665b8!2s110%20Sierra%2C%20San%20Antonio%2C%20Para%C3%B1aque%2C%201715%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1710058552449!5m2!1sen!2sph"
                  width={"100%"}
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               />
               <SimpleGrid columns={[1, 2]} width={"100%"}>
                  <VStack alignItems={"start"}>
                     <Heading size="md" color={projectColorSecondary}>
                        ADDRESS:
                     </Heading>
                     <Text>
                        <Icon as={BsGeoAlt} color={projectColorTertiary} /> Dr Arcadio Santos Ave,
                        San Antonio, Parañaque, 1700 Metro Manila
                     </Text>
                     <Heading size="md" color={projectColorSecondary}>
                        STORE HOURS:
                     </Heading>
                     <Text>We are open from Monday to Friday, 9:00 AM to 5:00 PM.</Text>
                  </VStack>
                  <VStack alignItems={"start"}>
                     <Heading size="md" color={projectColorSecondary}>
                        CONTACT US AT:
                     </Heading>
                     <Text>studiomix1@gmail.com</Text>
                  </VStack>
               </SimpleGrid>
            </VStack>
         </Box>
      </>
   );
};

export default Inquire;
