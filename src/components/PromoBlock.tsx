import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import {
  projectColorPrimary,
  projectColorSecondary,
  projectColorTertiary,
} from "../theme";
import "../index.css";
import PromoCard from "./PromoCard";

interface Props {
  title: string;
}
const PromoBlock = ({ title }: Props) => {
  const spacing = theme.space[5];
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <Heading color={projectColorSecondary} marginBottom={5}>
          {title}
        </Heading>
        <Flex columnGap={8} flexWrap={"wrap"} justifyContent={"center"}>
          <PromoCard title="PACKAGE A" pieces={[2, 3, 5]} price={45} />
          <PromoCard title="PACKAGE B" pieces={[4, 5, 7]} price={99} />
          <PromoCard title="PACKAGE C" pieces={[8, 10, 12]} price={129} />
        </Flex>
      </Box>
    </Box>
  );
};

export default PromoBlock;
