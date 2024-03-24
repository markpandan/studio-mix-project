import { Box } from "@chakra-ui/react";
import CollageCardDetails from "./CollageCardDetails";

interface Props {
  index: number;
  height: string;
  hoverIndex: number;
  setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
}
const CollageCard = ({ index, height, hoverIndex, setHoverIndex }: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
      backgroundColor={"gray.500"}
      borderRadius={10}
      height={height}
      overflow={"hidden"}
    >
      <CollageCardDetails index={index} hoverIndex={hoverIndex} />
    </Box>
  );
};

export default CollageCard;
