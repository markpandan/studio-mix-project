import { ReactNode, useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
import { projectColorSecondary } from "../theme";

interface Props {
  children: ReactNode;
  image?: string;
}

const Jumbotron = ({ children }: Props) => {
  return (
    <Center h={"300px"} bgColor={"gray.100"}>
      <Text fontSize={"7xl"} fontWeight={"bold"} color={projectColorSecondary}>
        {children}
      </Text>
    </Center>
  );
};

export default Jumbotron;
