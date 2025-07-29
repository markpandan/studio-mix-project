import SubJumbotron from "../components/Jumbotrons/SubJumbotron";
import Carousel from "../components/Carousel";
import CollageBlock from "../components/Collage";

// TODO: Make the images loaded to be "lazy", non-blocking or make their resolutions smaller for faster rendering.
const Gallery = () => {
  return (
    <>
      <SubJumbotron image="/assets/jumbotron_image.jpg">GALLERY</SubJumbotron>
      <Carousel />
      <CollageBlock />
    </>
  );
};

export default Gallery;
