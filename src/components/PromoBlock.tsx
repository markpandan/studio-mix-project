import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import "../index.css";
import { projectColorPrimary, projectColorSecondary } from "../theme";
import PromoCard from "./PromoCard";

interface Props {
   title: string;
}
const PromoBlock = ({ title }: Props) => {
   return (
      <Box bgColor={projectColorPrimary}>
         <Box className="defaultContainerFormat">
            <Heading color={projectColorSecondary} marginBottom={5}>
               {title}
            </Heading>
            <Grid
               templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
               }}
               gap={6}
            >
               <GridItem>
                  <PromoCard title="PACKAGE A" pieces={[2, 3, 5]} price={45} />
               </GridItem>
               <GridItem>
                  <PromoCard title="PACKAGE B" pieces={[4, 5, 7]} price={99} />
               </GridItem>
               <GridItem colSpan={{ md: 1 }}>
                  <PromoCard
                     title="PACKAGE C"
                     pieces={[8, 10, 12]}
                     price={129}
                  />
               </GridItem>
            </Grid>
         </Box>
      </Box>
   );
};

export default PromoBlock;
