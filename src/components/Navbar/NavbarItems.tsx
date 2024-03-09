import { Box, Button, Stack } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
}
const MenuItem = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
      >
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost">Gallery</Button>
        <Button variant="ghost">About Us</Button>
        <Button
          border={1}
          borderColor="white"
          borderRadius={10}
          borderStyle="solid"
          boxShadow={"3px 3px 10px rgba(0, 0, 0, 0.2)"}
          colorScheme="red"
          variant="solid"
        >
          Inquire
        </Button>
      </Stack>
    </Box>
  );
};

export default MenuItem;
