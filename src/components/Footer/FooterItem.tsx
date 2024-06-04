import { Button, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const FooterItem = () => {
   return (
      <Stack direction={["column", "row"]} spacing={1}>
         <Button variant="ghost">Home</Button>
         <Button variant="ghost">Our Story</Button>
         <NavLink to="/privacy-policy">
            <Button variant="ghost">Privacy Policy</Button>
         </NavLink>
         <Button variant="ghost">Contact Us</Button>
         <NavLink to="/careers">
            <Button variant="ghost">Career</Button>
         </NavLink>
      </Stack>
   );
};

export default FooterItem;
