import { Box, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../index.css";
import { projectColorPrimary } from "../theme";
import PrimaryButton from "./PrimaryButton";
import ProductCard from "./ProductCard";

const ProductBlock = () => {
  return (
    <Box bgColor={projectColorPrimary}>
      <Box className="defaultContainerFormat">
        <HStack justify={"space-between"} alignContent={"center"} mb={7}>
          <Heading color={"purple.500"}>OTHER PRODUCTS</Heading>
          <PrimaryButton>
            <Link to={"/products"}>View All</Link>
          </PrimaryButton>
        </HStack>
        <SimpleGrid columns={[1, 2, 4]} justifyContent="center" spacing={7}>
          {[...Array(8)].map((_, i) => (
            <ProductCard key={i} item="Lorem Ipsum" price={49} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductBlock;
