import { Box, Heading } from "@chakra-ui/react";
import { projectColorPrimary, projectColorSecondary } from "../../theme";
import "../../index.css";

const Collage = () => {
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <Heading color={projectColorSecondary}>MORE IMAGES</Heading>
      </Box>
    </Box>
  );
};

export default Collage;
