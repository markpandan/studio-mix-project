import { Box } from "@chakra-ui/react";
import ContentBlock from "../components/ContentBlock";
import CardCollectionBlock from "../components/CardCollectionBlock";
import { BsCardImage, BsCameraReels, BsBadgeHd } from "react-icons/bs";
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
      <Box h={"300px"} bgColor={"gray.100"}></Box>
      <ContentBlock
        heading="WE PRODUCE MEMORY LASTING IMAGES!"
        reverseToggle={false}
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
      <CardCollectionBlock contents={cardContents} />
      <ContentBlock
        heading="CAPTURE YOUR MOMENTS WITH US NOW!"
        reverseToggle={true}
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
