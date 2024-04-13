import {
  Box,
  SimpleGrid,
  Skeleton,
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

const Post = () => {
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
          <Skeleton height={"400px"} borderRadius={15}></Skeleton>
        </Box>
        <Box>
          <Heading fontSize={["4xl", "5xl"]} color={projectColorSecondary}>
            Lorem Ipsum The Title
          </Heading>
          <HStack justify={["center", "start"]} fontSize={["md", "lg"]}>
            <Icon as={BsCalendar3} color={projectColorTertiary} />
            <Text fontStyle={"italic"}>MM/DD/YYYY</Text>
            <Icon as={BsClock} color={projectColorTertiary} />
            <Text> HH:MM AM</Text>
          </HStack>

          <Text mt={[5, 7]} fontSize={"xl"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magnam
            praesentium repellat deserunt repellendus et accusamus magni
            consequatur esse dignissimos exercitationem accusantium assumenda,
            pariatur officiis est vero. Vero, illo eos.
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
              Zaldy Cuevas
            </Text>
          </Text>
          <SkeletonCircle size={"12"} />
        </HStack>
      </Stack>
    </VStack>
  );
};

export default Post;
