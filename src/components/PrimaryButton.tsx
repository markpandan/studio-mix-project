import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import { buttonFont } from "../theme";

interface Props {
  children: ReactNode;
}

const PrimaryButton = ({ children }: Props) => {
  return (
    <Button
      border={1}
      borderColor="white"
      borderRadius={10}
      borderStyle="solid"
      boxShadow={"3px 3px 10px rgba(0, 0, 0, 0.2)"}
      colorScheme="red"
      variant="solid"
      fontFamily={buttonFont}
      fontSize={"xl"}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
