import Jumbotron from "../components/SubJumbotron";
import Carousel from "../components/Carousel";
import CollageBlock from "../components/Collage";

const Gallery = () => {
   return (
      <>
         <Jumbotron image="src/assets/jumbotron_image.jpg">GALLERY</Jumbotron>
         <Carousel></Carousel>
         <CollageBlock></CollageBlock>
      </>
   );
};

export default Gallery;
