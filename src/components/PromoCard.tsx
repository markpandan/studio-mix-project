import {
   Card,
   CardBody,
   CardHeader,
   Heading,
   Text,
   theme,
} from "@chakra-ui/react";
import { projectColorSecondary, projectColorTertiary } from "../theme";

interface Props {
   title: string;
   pieces: number[];
   price: number;
}

const PromoCard = ({ title, pieces, price }: Props) => {
   if (pieces.length > 3)
      throw new Error("PromoCard only supports up to 3 pieces");

   const inclusions = ["4x4", "2x2", "1x1"];
   // const spacing = theme.space[5];

   return (
      <Card
         borderTop={7}
         borderColor={projectColorTertiary}
         borderStyle={"solid"}
         borderRadius={20}
         boxShadow={"3px 3px 10px rgba(0, 0, 0, 0.5)"}
         px={[0, 5]}
      >
         <CardHeader
            color={projectColorSecondary}
            textAlign={"center"}
            padding={[3, 1]}
         >
            <Heading fontSize={{ md: "2xl" }} color={projectColorSecondary}>
               {title}
            </Heading>
         </CardHeader>
         <CardBody padding={3}>
            <Text
               color={projectColorSecondary}
               fontWeight={"semibold"}
               fontSize={["2xl", "xl", "md"]}
            >
               Includes:
            </Text>
            {pieces.map((piece, index) => (
               <Text
                  key={index}
                  fontWeight={"black"}
                  fontSize={["5xl", "3xl"]}
                  color={projectColorTertiary}
                  textAlign={"center"}
               >
                  {`${piece} `}
                  <Text
                     as={"span"}
                     fontWeight={"normal"}
                     fontSize={["2xl", "lg"]}
                     color={"black"}
                  >
                     &nbsp; pcs of {inclusions[index]} picture
                  </Text>
               </Text>
            ))}

            <Heading
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
                  ₱{price}
               </Text>
            </Heading>
         </CardBody>
      </Card>
   );
};

export default PromoCard;
