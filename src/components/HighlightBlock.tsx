import { IconType } from "react-icons";
import { Box, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import "../index.css";
import { projectColorSecondary, projectColorTertiary } from "../theme";

interface Props {
  contents: { icon: IconType; heading: string; text: string }[];
}

// TODO: Does not support multiple cards. Only at 3 cards compatible.
const PromoBlock = ({ contents }: Props) => {
  const lastCardElement = { sm: 2, lg: 1 };

  return (
    <>
      <Box bgColor={"gray.50"} py={14}>
        <Box className="defaultContainerFormat" margin={"auto"}>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={5}
          >
            {contents.map((content, index) => (
              <GridItem
                key={index}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                rowGap={4}
                colSpan={index === contents.length - 1 ? lastCardElement : 1}
              >
                <Icon
                  as={content.icon}
                  color={projectColorTertiary}
                  boxSize={16}
                ></Icon>
                <Heading color={projectColorSecondary}>
                  {content.heading}
                </Heading>
                <Text align={"center"}>{content.text}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PromoBlock;
