import { Center, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { projectColorSecondary } from "../theme";

interface Props {
  children: string;
  image?: string;
}

const Jumbotron = ({ children }: Props) => {
  return (
    <Center h={"300px"} bgColor={"gray.100"}>
      <Heading
        fontSize={["5xl", "7xl"]}
        fontWeight={"bold"}
        color={projectColorSecondary}
      >
        {children.toUpperCase()}
      </Heading>
    </Center>
  );
};

export default Jumbotron;
