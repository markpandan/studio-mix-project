import {
   Box,
   SimpleGrid,
   Image,
   VStack,
   Text,
   Heading,
   HStack,
   SkeletonCircle,
   Icon,
   Stack,
} from "@chakra-ui/react";
import { BsHeart, BsShare, BsCalendar3, BsClock } from "react-icons/bs";
import {
   defaultContainerSize,
   projectColorSecondary,
   projectColorTertiary,
} from "../theme";
import { useParams } from "react-router-dom";
import { images } from "../helpers/getdb.ts";
import { imageObj } from "../helpers/types";

const Post = () => {
   const { id } = useParams();
   const image: imageObj = images[Number(id!)];

   return (
      <VStack
         maxW={defaultContainerSize}
         margin={"auto"}
         align={"stretch"}
         py={10}
         height={["auto", "100vh"]}
         spacing={10}
      >
         <SimpleGrid columns={[1, 2]} spacing={10}>
            <Box>
               <Image
                  height={"400px"}
                  borderRadius={15}
                  src={"../" + image.src}
               ></Image>
            </Box>
            <Box>
               <Heading fontSize={["4xl", "5xl"]} color={projectColorSecondary}>
                  {image.name}
               </Heading>
               <HStack justify={["center", "start"]} fontSize={["md", "lg"]}>
                  <Icon as={BsCalendar3} color={projectColorTertiary} />
                  <Text fontStyle={"italic"}>MM/DD/YYYY</Text>
                  <Icon as={BsClock} color={projectColorTertiary} />
                  <Text> HH:MM AM</Text>
               </HStack>

               <Text mt={[5, 7]} fontSize={"xl"}>
                  {image.description}
               </Text>
            </Box>
         </SimpleGrid>
         <Stack
            direction={["column", "row"]}
            justify={["center", "space-between"]}
            fontSize={"3xl"}
         >
            <HStack justify={"center"}>
               <Icon as={BsHeart} color={projectColorTertiary} />
               <Text>17,305</Text>
               <Icon as={BsShare} color={projectColorTertiary} marginLeft={8} />
               <Text>500</Text>
            </HStack>

            <HStack justify={"center"}>
               <Text fontStyle={"italic"} fontSize={"xl"}>
                  Made By:&nbsp;
                  <Text as={"span"} color={projectColorSecondary}>
                     {image.artist}
                  </Text>
               </Text>
               <SkeletonCircle size={"12"} />
            </HStack>
         </Stack>
      </VStack>
   );
};

export default Post;
