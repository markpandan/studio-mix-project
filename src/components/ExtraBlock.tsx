import { Box, Heading, Text } from "@chakra-ui/react";
import "../index.css";
import { projectColorPrimary, projectColorSecondary } from "../theme";
import GradientCard from "./GradientCard";

const ExtraBlock = () => {
  return (
    <Box bgColor={projectColorPrimary} marginTop={"-3.5em"}>
      <Box className="defaultContainerFormat">
        <Box mb={7}>
          <Heading color={projectColorSecondary}>EXTRAS</Heading>
        </Box>
        <GradientCard
          gradient="linear(to-bl, #5200FF, rgba(255, 0, 0, 0.54))"
          image={{
            src: "src/assets/lotto.jpg",
            alt: "Lotto Store at Studio Mix",
            width: "100%",
            height: "100%",
          }}
        >
          <Heading color={"white"}>
            You can also inquire on our PCSO Lotto here!
          </Heading>
          <br />
          <Text color={"white"}>
            Just go beside on our store here at Jaka Plaza! Maybe you will be
            the next winner on our lotto.
          </Text>
        </GradientCard>
      </Box>
    </Box>
  );
};

export default ExtraBlock;
