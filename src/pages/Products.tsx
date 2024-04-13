import { Box, Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";
import { defaultContainerSize, projectColorPrimary } from "../theme";
import Pagination from "../components/Pagination";

const Products = () => {
  return (
    <>
      <Jumbotron>Products</Jumbotron>
      <Box bgColor={projectColorPrimary}>
        <VStack
          maxW={defaultContainerSize}
          margin={"auto"}
          align={"stretch"}
          spacing={10}
          py={[5, 10]}
        >
          <SimpleGrid columns={[1, 2, 4]} spacing={5}>
            {[...Array(8)].map((_, i) => (
              <ProductCard key={i} item={"Lorem Ipsum"} price={128} />
            ))}
          </SimpleGrid>
          <Pagination count={8} />
        </VStack>
      </Box>
    </>
  );
};

export default Products;
