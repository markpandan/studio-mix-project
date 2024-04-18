import { Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
   as: IconType;
   onClick: () => void;
}

const CarouselButton = ({ as: ReactIcon, onClick }: Props) => {
   return (
      <Button
         bgColor={"transparent"}
         onClick={onClick}
         _hover={{}}
         _active={{}}
      >
         <ReactIcon color={"white"}></ReactIcon>
      </Button>
   );
};

export default CarouselButton;
