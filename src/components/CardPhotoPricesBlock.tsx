import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  theme,
} from "@chakra-ui/react";
import {
  projectColorPrimary,
  projectColorSecondary,
  projectColorTertiary,
} from "../theme";
import "../index.css";

interface Props {
  title: string;
}
const CardPhotoPricesBlock = ({ title }: Props) => {
  const spacing = theme.space[5];
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <Heading color={projectColorSecondary} marginBottom={5}>
          {title}
        </Heading>
        <Flex columnGap={8} flexWrap={"wrap"} justifyContent={"center"}>
          <Card
            flexBasis={`calc(33% - ${spacing})`}
            borderTop={7}
            borderColor={projectColorTertiary}
            borderStyle={"solid"}
          >
            <CardHeader color={projectColorSecondary} textAlign={"center"}>
              <Heading color={projectColorSecondary}>PACKAGE A</Heading>
            </CardHeader>
            <CardBody>
              <Text color={projectColorSecondary} fontSize={"xl"}>
                Includes:
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                2{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 4x4 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                3{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 2x2 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                5{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 1x1 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"xl"}
                textAlign={"center"}
              >
                Price:{" "}
                <Text
                  as={"span"}
                  color={projectColorTertiary}
                  fontSize={"6xl"}
                  fontWeight={"bold"}
                >
                  ₱49
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card
            flexBasis={`calc(33% - ${spacing})`}
            borderTop={7}
            borderColor={projectColorTertiary}
            borderStyle={"solid"}
          >
            <CardHeader color={projectColorSecondary} textAlign={"center"}>
              <Heading color={projectColorSecondary}>PACKAGE A</Heading>
            </CardHeader>
            <CardBody>
              <Text color={projectColorSecondary} fontSize={"xl"}>
                Includes:
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                2{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 4x4 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                3{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 2x2 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                5{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 1x1 picture
                </Text>
              </Text>
              <Text fontWeight={"extrabold"} fontSize={"xl"}>
                Price:{" "}
                <Text
                  as={"span"}
                  color={projectColorTertiary}
                  fontSize={"6xl"}
                  fontWeight={"bold"}
                >
                  ₱49
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card
            flexBasis={`calc(33% - ${spacing})`}
            borderTop={7}
            borderColor={projectColorTertiary}
            borderStyle={"solid"}
          >
            <CardHeader color={projectColorSecondary} textAlign={"center"}>
              <Heading color={projectColorSecondary}>PACKAGE A</Heading>
            </CardHeader>
            <CardBody>
              <Text color={projectColorSecondary} fontSize={"xl"}>
                Includes:
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                2{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 4x4 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                3{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 2x2 picture
                </Text>
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"5xl"}
                color={projectColorTertiary}
              >
                5{" "}
                <Text
                  as={"span"}
                  fontWeight={"normal"}
                  fontSize={"lg"}
                  color={"black"}
                >
                  &nbsp; pcs of 1x1 picture
                </Text>
              </Text>
              <Text fontWeight={"extrabold"} fontSize={"xl"}>
                Price:{" "}
                <Text
                  as={"span"}
                  color={projectColorTertiary}
                  fontSize={"6xl"}
                  fontWeight={"bold"}
                >
                  ₱49
                </Text>
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardPhotoPricesBlock;
