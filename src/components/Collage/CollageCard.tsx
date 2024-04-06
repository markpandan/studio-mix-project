import { Box, Image } from "@chakra-ui/react";
import CollageCardDetails from "./CollageCardDetails";

// interface ProposedProps {
//   index: { key: number; hoverKey: number };
//   height: string;
//   setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
//   database?: { src: string; title: string; tag: number[] }[];
// }

interface Props {
  index: number;
  height: string;
  hoverIndex: number;
  setHoverIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CollageCard = ({ index, height, hoverIndex, setHoverIndex }: Props) => {
  const image = "src/assets/painting_1.jpg";
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
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
      background={image}
      borderRadius={10}
      height={height}
      overflow={"hidden"}
    >
      <Image
        position="absolute"
        src={image}
        height={"100%"}
        width={"100%"}
        objectFit={"cover"}
      />
      <CollageCardDetails index={index} hoverIndex={hoverIndex} />
    </Box>
  );
};

export default CollageCard;
