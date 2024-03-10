import { Circle, Icon, Wrap } from "@chakra-ui/react";
import {
  BsFacebook,
  BsThreads,
  BsTiktok,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

// TODO: Make the socials clickable
const FooterSocials = () => {
  return (
    <>
      <Wrap justify={["center", "flex-end"]}>
        <Circle size={"40px"} bgColor={"purple.500"}>
          <Icon as={BsFacebook} />
        </Circle>
        <Circle size={"40px"} bgColor={"purple.500"}>
          <Icon as={BsThreads} />
        </Circle>
        <Circle size={"40px"} bgColor={"purple.500"}>
          <Icon as={BsTiktok} />
        </Circle>
        <Circle size={"40px"} bgColor={"purple.500"}>
          <Icon as={BsInstagram} />
        </Circle>
        <Circle size={"40px"} bgColor={"purple.500"}>
          <Icon as={BsTwitterX} />
        </Circle>
      </Wrap>
    </>
  );
};

export default FooterSocials;
