import { Button } from "@chakra-ui/react";
import PromoBlock from "../components/PromoBlock";
import ContentBlock from "../components/ContentBlock";
import Jumbotron from "../components/Jumbotron";
import ProductBlock from "../components/ProductBlock";
import ExtraBlock from "../components/ExtraBlock";
import PrimaryButton from "../components/PrimaryButton";

const Services = () => {
  return (
    <>
      <Jumbotron>SERVICES</Jumbotron>
      <PromoBlock title="PHOTOGRAPH PROMOS"></PromoBlock>
      <ContentBlock
        heading={"We accept Painting request as well!"}
        reverseToggle={false}
        primaryColor={false}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At urna condimentum
        mattis pellentesque id nibh tortor id. Fermentum iaculis eu non diam
        phasellus vestibulum lorem. Scelerisque varius morbi enim nunc faucibus
        a pellentesque sit amet.
        <br />
        <br />
        <PrimaryButton>Inquire Now</PrimaryButton>
      </ContentBlock>
      <ProductBlock />
      <ExtraBlock />
    </>
  );
};

export default Services;
