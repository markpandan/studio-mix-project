import { Box, HStack } from "@chakra-ui/react";
import { projectColorTertiary } from "../../theme";

interface Props {
   select: number;
   size: number;
   onClick: (index: number) => void;
}

const CarouselIndicators = ({ select, size, onClick }: Props) => {
   return (
      <HStack alignSelf={"center"}>
         {[...Array(size)].map((_, index) => (
            <Box
               key={index}
               bgColor={select === index ? projectColorTertiary : "gray.200"}
               width={8}
               height={2}
               onClick={() => onClick(index)}
            />
         ))}
      </HStack>
   );
};

export default CarouselIndicators;
