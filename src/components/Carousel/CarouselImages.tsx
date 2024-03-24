import { Box } from "@chakra-ui/react";
import "./carousel.css";

interface Props {
  activeIndex: number;
}

const CarouselImages = ({ activeIndex }: Props) => {
  return (
    <Box position={"absolute"} width={"100%"} height={"100%"}>
      {["green", "red", "yellow", "blue"].map((color, index) => (
        <Box
          key={index}
          className="fade"
          backgroundColor={color}
          height={"100%"}
          display={index === activeIndex ? "active" : "none"}
        ></Box>
      ))}
    </Box>
  );
};

export default CarouselImages;
