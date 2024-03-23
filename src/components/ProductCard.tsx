import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Skeleton,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import { projectColorSecondary, projectColorTertiary } from "../theme";

interface Props {
  item: string;
  price: number;
  image?: string;
}

const ProductCard = ({ item, price, image }: Props) => {
  const theme = useTheme();
  const spacing = theme.space[5];

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      marginX={`calc(${spacing} / -2)`}
    >
      {[...Array(8)].map((_, i) => (
        <Card
          key={i}
          flexGrow="0"
          flexShrink="0"
          flexBasis={`calc(25% - ${spacing})`}
          marginBottom={spacing}
          _even={{
            marginX: spacing,
          }}
        >
          <CardHeader>{!image && <Skeleton height={20} />}</CardHeader>
          <CardBody>
            <VStack>
              <Heading color={projectColorSecondary}>{item}</Heading>
              <Heading color={projectColorTertiary}>₱{price}</Heading>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default ProductCard;
