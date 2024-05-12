import { Link } from "react-router-dom";
import ContentBlock from "../components/ContentBlock";
import ExtraBlock from "../components/ExtraBlock";
import Jumbotron from "../components/SubJumbotron";
import PrimaryButton from "../components/PrimaryButton";
import ProductBlock from "../components/ProductBlock";
import PromoBlock from "../components/PromoBlock";
import { jumbotronBackground_1 } from "../theme";

const Services = () => {
   return (
      <>
         <Jumbotron image={jumbotronBackground_1}>SERVICES</Jumbotron>
         <PromoBlock title="PHOTOGRAPH PROMOS"></PromoBlock>
         <ContentBlock
            heading={"We accept Painting request as well!"}
            reverseToggle={false}
            primaryColor={false}
         >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna
            condimentum mattis pellentesque id nibh tortor id. Fermentum iaculis
            eu non diam phasellus vestibulum lorem. Scelerisque varius morbi
            enim nunc faucibus a pellentesque sit amet.
            <br />
            <br />
            <Link to="/inquire">
               <PrimaryButton>Inquire Now</PrimaryButton>
            </Link>
         </ContentBlock>
         <ProductBlock />
         <ExtraBlock />
      </>
   );
};

export default Services;
