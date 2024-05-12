import {
   Card,
   CardBody,
   CardHeader,
   Heading,
   Skeleton,
   Image,
   VStack,
} from "@chakra-ui/react";
import {
   defaultCardShadow,
   projectColorSecondary,
   projectColorTertiary,
} from "../theme";
import { Props } from "./ProductCard";

export const ProductCard = ({ item, price, image }: Props) => {
   return (
      <Card shadow={defaultCardShadow} borderRadius={20}>
         <CardHeader>
            {image ? (
               <Image
                  src={image}
                  height={40}
                  alt="Picture of a Product"
                  margin={"auto"}
               />
            ) : (
               <Skeleton height={40} borderRadius={18} />
            )}
         </CardHeader>
         <CardBody>
            <VStack>
               <Heading fontSize={"2xl"} color={projectColorSecondary}>
                  {item}
               </Heading>
               <Heading color={projectColorTertiary}>₱{price}</Heading>
            </VStack>
         </CardBody>
      </Card>
   );
};
