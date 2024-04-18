import { Box, Image, SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../index.css";

interface Props {
   children: ReactNode;
   gradient: string;
   image?: { src: string; alt: string; width?: string; height?: string };
   width?: string | number;
   height?: string | number;
}
const GradientCard = ({ children, gradient, image, width, height }: Props) => {
   const boxRadius = 20;
   return (
      <Box bgGradient={gradient} borderRadius={boxRadius} padding={5}>
         <SimpleGrid columns={[null, 2]} spacing={10}>
            {image ? (
               <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  borderRadius={boxRadius}
               />
            ) : (
               <Skeleton
                  height={"xs"}
                  width={"100%"}
                  borderRadius={boxRadius}
               />
            )}
            <VStack justify={"center"}>{children}</VStack>
         </SimpleGrid>
      </Box>
   );
};

export default GradientCard;
