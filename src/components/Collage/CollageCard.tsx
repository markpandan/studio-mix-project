import { Badge, Box, HStack, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import dbGenres from "../../pseudo_db/dbGenres.json";
import { imageObj } from "../../helpers/types";
import { imageDescriptionBgColor, imageDescriptionTxtColor } from "../../theme";

// interface ProposedProps {
//   index: { key: number; hoverKey: number };
//   height: string;
//   setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
//   database?: { src: string; title: string; tag: number[] }[];
// }

interface Props {
   index: number;
   height: string;
   image: imageObj;
   hoverIndex: number;
   setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
}

// TODO: Implement Lazy loading for the images.
// TODO: Descale the images first. While in that event, place a Skeleton component as a placeholder first.
// TODO: De-nest the genres array variable
const CollageCard = ({ index, height, image, hoverIndex, setHoverIndex }: Props) => {
   const navigate = useNavigate();
   return (
      <Box
         display={"flex"}
         flexDirection={"column"}
         position={"relative"}
         justifyContent={"flex-end"}
         _hover={{
            transform: "scale(1.05)",
            transition: "transform .15s ease-in",
         }}
         onClick={() => navigate(`/post/${index}`)}
         onMouseEnter={() => setHoverIndex(index)}
         onMouseLeave={() => setHoverIndex(-1)}
         borderRadius={10}
         height={height}
         overflow={"hidden"}
      >
         <Image
            position="absolute"
            src={image.src}
            height={"450px"}
            width={"450px"}
            objectFit={"cover"}
            loading="lazy"
            alt={`Picture ${index}`}
         />
         <Box
            bottom={0}
            width="100%"
            height="75px"
            backgroundColor={imageDescriptionBgColor}
            color={imageDescriptionTxtColor}
            transform={index == hoverIndex ? "translateY(0)" : "translateY(100%)"}
            transition="transform .45s ease-out"
            paddingX={[2, 4]}
            paddingY={2}
         >
            <HStack>
               {image.genres.map((genre, index) => (
                  <Badge key={index} variant="subtle" colorScheme={dbGenres["Genres"][genre].color}>
                     {dbGenres["Genres"][genre].tag}
                  </Badge>
               ))}
            </HStack>
            <Heading mt={1} size={"md"}>
               {image.name}
            </Heading>
         </Box>
      </Box>
   );
};

export default CollageCard;
