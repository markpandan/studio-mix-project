import {
   Avatar,
   Box,
   Heading,
   VStack,
   Text,
   Wrap,
   WrapItem,
} from "@chakra-ui/react";
import { defaultContainerSize, projectColorSecondary } from "../theme";

interface Props {
   family: { name: string; role: string; image?: string | null }[];
}

const EmployeeBlock = ({ family }: Props) => {
   return (
      <Box maxW={defaultContainerSize} margin={"auto"} py={5}>
         <Heading color={projectColorSecondary} mb={5}>
            MEET THE FAMILY
         </Heading>
         <Wrap spacing={10} justify={"center"}>
            {family.map((member, index) => (
               <WrapItem key={index}>
                  <VStack>
                     <Avatar
                        size={"xl"}
                        name={member.name}
                        src={member.image || undefined}
                     ></Avatar>
                     <Heading size={"lg"} color={projectColorSecondary}>
                        {member.name}
                     </Heading>
                     <Text fontSize={"xl"} fontStyle={"italic"}>
                        {member.role}
                     </Text>
                  </VStack>
               </WrapItem>
            ))}
         </Wrap>
      </Box>
   );
};

export default EmployeeBlock;
