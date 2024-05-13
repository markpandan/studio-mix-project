import { Box, Heading, Image } from "@chakra-ui/react";
import { projectColorSecondary } from "../../theme";

interface Props {
   children: string;
   image?: string;
}

const SubJumbotron = ({ children, image }: Props) => {
   return (
      <Box position={"relative"}>
         <Image
            w={"100%"}
            h={"300px"}
            src={image}
            filter={"blur(8px)"}
            objectFit={"cover"}
            opacity={0.5}
            alt={"Studio Mix Wallpaper"}
         />
         <Heading
            w={"100%"}
            textAlign={"center"}
            fontSize={["5xl", "7xl"]}
            fontWeight={"bold"}
            color={projectColorSecondary}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
         >
            {children.toUpperCase()}
         </Heading>
      </Box>
   );
};

export default SubJumbotron;
