import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SubJumbotron from "../components/Jumbotrons/SubJumbotron";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import { products } from "../helpers/getdb";
import { productObj } from "../helpers/types";
import { defaultContainerSize, projectColorPrimary, jumbotronBackground_1 } from "../theme";

const count = products.length;
const limit = 8;

const Products = () => {
   const [page, setPage] = useState(0);
   const pages = Math.ceil(count / limit);

   const [displayedProducts, setDisplayedProducts] = useState<productObj[]>([]);

   useEffect(() => {
      setDisplayedProducts(products.slice(page * limit, (page + 1) * limit));
   }, [page]);

   return (
      <>
         <SubJumbotron image={jumbotronBackground_1}>Products</SubJumbotron>
         <Box bgColor={projectColorPrimary}>
            <VStack
               maxW={defaultContainerSize}
               margin={"auto"}
               align={"stretch"}
               spacing={10}
               py={[5, 10]}
            >
               <SimpleGrid columns={[1, 2, 4]} spacing={5} minHeight={"700px"} alignItems={"start"}>
                  {displayedProducts.map((item, i) => (
                     <ProductCard
                        key={i}
                        item={item.name}
                        price={item.price}
                        image="src\assets\placeholder.png"
                     />
                  ))}
               </SimpleGrid>
               <Pagination pages={pages} action={(value) => setPage(value)} />
            </VStack>
         </Box>
      </>
   );
};

export default Products;
