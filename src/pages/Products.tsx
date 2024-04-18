import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import { defaultContainerSize, projectColorPrimary } from "../theme";
import { products } from "../helpers/getdb";

const Products = () => {
   // Make a hook in here to count the paginations

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
                  {[...Array(products.length)].map((_, i) => (
                     <ProductCard
                        key={i}
                        item={products[i].name}
                        price={products[i].price}
                     />
                  ))}
               </SimpleGrid>
               <Pagination count={8} />
            </VStack>
         </Box>
      </>
   );
};

export default Products;
