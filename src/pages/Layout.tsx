import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useTop from "../hooks/useTop";
import { Circle, Icon } from "@chakra-ui/react";
import { projectColorTertiary } from "../theme";
import { BsChevronUp } from "react-icons/bs";

const Layout = () => {
   const { isTop } = useTop(true);

   return (
      <>
         <Navbar />
         <Outlet />
         <Circle
            size={12}
            bg={projectColorTertiary}
            position={"fixed"}
            top={"93%"}
            right={"2%"}
            transform={"translate(-50%, -50%)"}
            cursor={"pointer"}
            onClick={() => {
               window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
               opacity: isTop ? 0 : 1,
               visibility: isTop ? "hidden" : "visible",
               transition: "opacity 0.5s linear, visibility 0.5s linear",
            }}
         >
            <Icon as={BsChevronUp} color={"white"}></Icon>
         </Circle>
         <Footer />
      </>
   );
};

export default Layout;
