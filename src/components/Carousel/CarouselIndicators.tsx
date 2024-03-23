import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { projectColorTertiary } from "../../theme";

interface Props {
  select: number;
  amount: number;
  size: number;
}

const CarouselIndicators = () => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedBox(index);
  };

  return (
    <HStack alignSelf={"center"}>
      {[...Array(4)].map((_, index) => (
        <Box
          key={index}
          bgColor={selectedBox === index ? projectColorTertiary : "gray.200"}
          width={8}
          height={2}
          onClick={() => handleClick(index)}
        />
      ))}
    </HStack>
  );
};

export default CarouselIndicators;
