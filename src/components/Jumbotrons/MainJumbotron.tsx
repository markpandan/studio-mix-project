import { ReactNode } from "react";
import { Box, Image } from "@chakra-ui/react";
import { defaultContainerSize } from "../../theme";

interface Props {
   children: ReactNode;
   image?: string;
}

const MainJumbotron = ({ children, image }: Props) => {
   return (
      <Box position={"relative"} objectFit={"cover"}>
         <Image
            w={"100%"}
            h={"100vh"}
            src={image}
            objectFit={"cover"}
            filter={"brightness(0.5)"}
         />
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
      </Box>
   );
};

export default MainJumbotron;
