import { Button } from "@chakra-ui/react";
import CardPhotoPricesBlock from "../components/CardPhotoPricesBlock";
import ContentBlock from "../components/ContentBlock";
import Jumbotron from "../components/Jumbotron";
import ProductBlock from "../components/ProductBlock";

const Services = () => {
  return (
    <>
      <Jumbotron>SERVICES</Jumbotron>
      <CardPhotoPricesBlock title="PHOTOGRAPH PROMOS"></CardPhotoPricesBlock>
      <ContentBlock
        heading={"We accept Painting request as well!"}
        reverseToggle={false}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At urna condimentum
        mattis pellentesque id nibh tortor id. Fermentum iaculis eu non diam
        phasellus vestibulum lorem. Scelerisque varius morbi enim nunc faucibus
        a pellentesque sit amet.
        <br />
        <br />
        <Button
          border={1}
          borderColor="white"
          borderRadius={10}
          borderStyle="solid"
          boxShadow={"3px 3px 10px rgba(0, 0, 0, 0.2)"}
          colorScheme="red"
          variant="solid"
        >
          Inquire Now
        </Button>
      </ContentBlock>
      <ProductBlock></ProductBlock>
    </>
  );
};

export default Services;
