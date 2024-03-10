import { BsGeoAlt } from "react-icons/bs";
import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  defaultContainerSize,
  projectColorPrimary,
  projectColorSecondary,
  projectColorTertiary,
} from "../theme";

const Inquire = () => {
  return (
    <>
      <Center h={"300px"} bgColor={"gray.100"}>
        <Text fontSize={"7xl"} fontWeight={"bold"} color={"purple.500"}>
          INQUIRE
        </Text>
      </Center>
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
          <HStack>
            <Icon as={BsGeoAlt} color={projectColorTertiary}></Icon>
            <Text>
              Dr Arcadio Santos Ave, San Antonio, Parañaque, 1700 Metro Manila
            </Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Inquire;
