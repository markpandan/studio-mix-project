import { Button, Stack } from "@chakra-ui/react";

const FooterItem = () => {
  return (
    <Stack direction={["column", "row"]} spacing={1}>
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">Our Story</Button>
      <Button variant="ghost">Privacy Policy</Button>
      <Button variant="ghost">Contact Us</Button>
      <Button variant="ghost">Career</Button>
    </Stack>
  );
};

export default FooterItem;
