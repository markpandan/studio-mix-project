import { Box, HStack, Heading } from "@chakra-ui/react";
import "../index.css";
import { projectColorPrimary } from "../theme";
import ProductCard from "./ProductCard";
import PrimaryButton from "./PrimaryButton";

const ProductBlock = () => {
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <HStack justify={"space-between"} alignContent={"center"} mb={7}>
          <Heading color={"purple.500"}>OTHER PRODUCTS</Heading>
          <PrimaryButton>View All</PrimaryButton>
        </HStack>
        <ProductCard item="Lorem Ipsum" price={49} />
      </Box>
    </Box>
  );
};

export default ProductBlock;
