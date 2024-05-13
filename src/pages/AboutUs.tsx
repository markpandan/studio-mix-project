import { ContentBlock, ContentBlockVertical } from "../ContentBlocks";
import EmployeeBlock from "../components/EmployeeBlock";
import SubJumbotron from "../components/Jumbotrons/SubJumbotron";

const AboutUs = () => {
   const family = [
      {
         name: "Mercy Magbanua",
         role: "Owner",
         image: "",
      },
      {
         name: "Zaldy Cuevas",
         role: "Assistant",
         image: "",
      },
   ];

   return (
      <>
         <SubJumbotron image="src/assets/jumbotron_image.jpg">
            ABOUT US
         </SubJumbotron>
         <ContentBlock
            heading="OUR JOURNEY"
            reverseToggle={false}
            image={{
               src: "src/assets/journey_image.jpg",
               alt: "Journey Image",
            }}
         >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            tincidunt arcu non sodales neque.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            porttitor eget dolor morbi. Feugiat nisl pretium fusce id velit.
         </ContentBlock>
         <EmployeeBlock family={family} />
         <ContentBlockVertical
            heading="WE STRIVE TO BECOME THE BEST!"
            image={{
               src: "src/assets/work_party_image.jpg",
               alt: "Work Party Image",
            }}
         >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            tincidunt arcu non sodales neque.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            porttitor eget dolor morbi. Feugiat nisl pretium fusce id velit.
         </ContentBlockVertical>
      </>
   );
};

export default AboutUs;
