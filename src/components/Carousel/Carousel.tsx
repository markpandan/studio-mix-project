import { Box, Flex, HStack } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import usePageCounter from "../../hooks/usePageCounter";
import { projectColorPrimary } from "../../theme";
import CarouselButton from "./CarouselButton";
import CarouselDescriptions from "./CarouselDescriptions";
import CarouselImages from "./CarouselImages";
import "./carousel.css";

// interface Prop {
//   children: React.ReactNode;
// }

// TODO: Learn more about the efficient state and hook components in React 18 by Mosh Hamedani next time. To avoid the prop drilling scenario here.
const Carousel = () => {
   // Size variable must depend on the amount of images assigned in the "highlight" database
   const size = 4;
   const { active, handlePages: setActive } = usePageCounter(size);
   // const [isHover, handleHover] = useState(false);

   return (
      <Box bgColor={projectColorPrimary}>
         <Box className="defaultContainerFormat">
            <Flex
               position={"relative"}
               borderRadius={20}
               height={"525px"}
               overflow={"hidden"}
               direction={"column"}
               justifyContent={"end"}
            >
               <CarouselImages activeIndex={active} />

               <HStack
                  zIndex={2}
                  justifyContent={"space-between"}
                  marginY={"auto"}
                  width={"100%"}
                  padding={5}
                  backgroundColor={"transparent"}
               >
                  <CarouselButton as={BsChevronLeft} onClick={() => setActive(active - 1)} />
                  <CarouselButton as={BsChevronRight} onClick={() => setActive(active + 1)} />
               </HStack>

               <CarouselDescriptions
                  activeIndex={active}
                  size={size}
                  handleClick={(index) => setActive(index)}
               ></CarouselDescriptions>
            </Flex>
         </Box>
      </Box>
   );
};

export default Carousel;
