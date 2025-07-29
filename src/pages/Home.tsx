import { BsBadgeHd, BsCameraReels, BsCardImage } from "react-icons/bs";
import { Heading, Text } from "@chakra-ui/react";
import ContentBlock from "../ContentBlocks/ContentBlock";
import PromoBlock from "../components/HighlightBlock";
import { MainJumbotron } from "../components/Jumbotrons";
import "../index.css";

const Home = () => {
  const cardContents = [
    {
      icon: BsCardImage,
      heading: "Quality Pictures",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque.",
    },
    {
      icon: BsCameraReels,
      heading: "Stunning Clarity",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque.",
    },
    {
      icon: BsBadgeHd,
      heading: "High Definition",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque.",
    },
  ];

  // TODO: Place a background on the first box
  return (
    <>
      <MainJumbotron id_focus="test" image="/assets/sunset_wallpaper.jpg">
        <Heading fontSize={["5xl", "7xl"]} fontWeight={"bold"}>
          Review Your Memories!
        </Heading>
        <hr style={{ width: "95%", margin: "auto" }} />
        <Text fontSize={["xl", "3xl"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </MainJumbotron>
      <ContentBlock
        id="test"
        heading="WE PRODUCE MEMORY LASTING IMAGES!"
        reverseToggle={false}
        image={{
          src: "/assets/photo_paper_image.jpg",
          alt: "Photo Paper Image",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt
        arcu non sodales neque.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor
        eget dolor morbi. Feugiat nisl pretium fusce id velit.
      </ContentBlock>
      <PromoBlock contents={cardContents} />
      <ContentBlock
        heading="CAPTURE YOUR MOMENTS WITH US NOW!"
        reverseToggle={true}
        image={{
          src: "/assets/capture_image.png",
          alt: "Capture Image",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt
        arcu non sodales neque.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor
        eget dolor morbi. Feugiat nisl pretium fusce id velit.
      </ContentBlock>
    </>
  );
};

export default Home;
