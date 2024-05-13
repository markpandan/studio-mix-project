import { Link } from "react-router-dom";
import ContentBlock from "../ContentBlocks/ContentBlock";
import ExtraBlock from "../components/ExtraBlock";
import SubJumbotron from "../components/Jumbotrons/SubJumbotron";
import PrimaryButton from "../components/PrimaryButton";
import ProductBlock from "../components/ProductBlock";
import PromoBlock from "../components/PromoBlock";
import { jumbotronBackground_1 } from "../theme";

const Services = () => {
   return (
      <>
         <SubJumbotron image={jumbotronBackground_1}>SERVICES</SubJumbotron>
         <PromoBlock title="PHOTOGRAPH PROMOS" />
         <ContentBlock
            heading={"We accept Painting request as well!"}
            reverseToggle={false}
            primaryColor={false}
            image={{
               src: "src/assets/painting_image.jpg",
               alt: "Painting Image",
            }}
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
