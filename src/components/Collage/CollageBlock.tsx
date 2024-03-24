import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../../index.css";
import { projectColorPrimary, projectColorSecondary } from "../../theme";
import CollageCard from "./CollageCard";

const CollageBlock = () => {
  const randHeight = ["200px", "240px", "280px", "320px"];
  const [heights, setHeights] = useState<string[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  useEffect(() => {
    setHeights(
      Array(15)
        .fill(null)
        .map(
          () =>
            randHeight[
              Math.floor(Math.random() * (randHeight.length - 1 - 0 + 1) + 0)
            ]
        )
    );
  }, []);

  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <Heading mb={4} color={projectColorSecondary}>
          MORE IMAGES
        </Heading>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry gutter="1.5rem">
            {heights.map((height, index) => (
              <CollageCard
                key={index}
                index={index}
                height={height}
                hoverIndex={hoverIndex}
                setHoverIndex={setHoverIndex}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Box>
  );
};

export default CollageBlock;
