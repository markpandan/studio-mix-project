import { Box, Image } from "@chakra-ui/react";
import "./carousel.css";

interface Props {
   activeIndex: number;
}

const CarouselImages = ({ activeIndex }: Props) => {
   const images = [
      "src/assets/painting_1.jpg",
      "src/assets/painting_2.jpg",
      "src/assets/painting_3.jpg",
      "src/assets/painting_4.jpg",
   ];

   return (
      <Box position={"absolute"} width={"100%"} height={"100%"}>
         {images.map((image, index) => (
            <Image
               key={index}
               src={image}
               className={"fade"}
               fit={"cover"}
               width={"100%"}
               height={"100%"}
               display={index === activeIndex ? "active" : "none"}
            />
         ))}
      </Box>
   );
};

export default CarouselImages;
