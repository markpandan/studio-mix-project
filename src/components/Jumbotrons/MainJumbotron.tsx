import { Box, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import useTop from "../../hooks/useTop";
import { defaultContainerSize } from "../../theme";

interface Props {
   children: ReactNode;
   id_focus?: string;
   image?: string;
}

const MainJumbotron = ({ children, id_focus, image }: Props) => {
   const { isTop } = useTop(true);

   return (
      <Box position={"relative"} objectFit={"cover"}>
         <Image w={"100%"} h={"100vh"} src={image} objectFit={"cover"} filter={"brightness(0.5)"} />
         <Box
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            width={"100%"}
            maxW={defaultContainerSize}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ md: "center", xl: "start" }}
            color={"white"}
         >
            {children}
         </Box>

         <VStack
            style={{
               opacity: isTop ? 1 : 0,
               visibility: isTop ? "visible" : "hidden",
               transition: "opacity 0.5s linear, visibility 0.5s linear",
            }}
            position={"fixed"}
            top={"93%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            onClick={() => {
               const element = document.getElementById(id_focus || "");
               element?.scrollIntoView({ behavior: "smooth" });
            }}
            cursor={"pointer"}
            color={"white"}
         >
            <Icon as={BsChevronBarDown} w={10} h={10}></Icon>
            <Text> Click Here For More</Text>
         </VStack>
      </Box>
   );
};

export default MainJumbotron;
