import { Box, Text, VStack } from "@chakra-ui/react";
import { SubJumbotron } from "../components/Jumbotrons";
import { defaultContainerSize } from "../theme";

const PrivacyPolicy = () => {
   return (
      <>
         <SubJumbotron image="src/assets/jumbotron_image.jpg">PRIVACY POLICY</SubJumbotron>
         <Box py={10}>
            <VStack maxW={defaultContainerSize} margin={"auto"} textAlign={"start"} gap={10}>
               <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel.
                  Tristique risus nec feugiat in fermentum. Justo nec ultrices dui sapien eget.
                  Viverra tellus in hac habitasse platea. Integer enim neque volutpat ac. Sit amet
                  volutpat consequat mauris. Ultrices dui sapien eget mi proin sed. Sit amet justo
                  donec enim diam vulputate. Porttitor leo a diam sollicitudin tempor. Diam
                  phasellus vestibulum lorem sed. Eu volutpat odio facilisis mauris sit amet.
                  Scelerisque eu ultrices vitae auctor eu augue. In nibh mauris cursus mattis
                  molestie. Eget lorem dolor sed viverra ipsum. Justo eget magna fermentum iaculis
                  eu non. Ultrices vitae auctor eu augue ut lectus arcu. Quis lectus nulla at
                  volutpat diam ut venenatis tellus in.
               </Text>
               <Text>
                  Etiam erat velit scelerisque in dictum non. Nunc sed blandit libero volutpat sed
                  cras. Enim ut sem viverra aliquet eget sit amet. Ornare suspendisse sed nisi lacus
                  sed viverra tellus. Ac turpis egestas sed tempus urna et pharetra. Suspendisse
                  potenti nullam ac tortor vitae purus faucibus. Est ultricies integer quis auctor
                  elit sed vulputate. Netus et malesuada fames ac turpis egestas. Nunc mattis enim
                  ut tellus elementum sagittis vitae et. Nisi lacus sed viverra tellus in hac
                  habitasse platea. Senectus et netus et malesuada. Imperdiet massa tincidunt nunc
                  pulvinar sapien et ligula ullamcorper malesuada.
               </Text>
               <Text>
                  Sit amet nisl suscipit adipiscing bibendum est ultricies. Adipiscing elit duis
                  tristique sollicitudin nibh sit. Duis ultricies lacus sed turpis tincidunt id
                  aliquet risus. Nunc lobortis mattis aliquam faucibus purus. Imperdiet dui accumsan
                  sit amet nulla facilisi morbi tempus. Tincidunt augue interdum velit euismod in
                  pellentesque. Semper quis lectus nulla at volutpat. Pretium aenean pharetra magna
                  ac placerat. Morbi quis commodo odio aenean. Est sit amet facilisis magna etiam
                  tempor.
               </Text>
               <Text>
                  Quis enim lobortis scelerisque fermentum dui faucibus. Consectetur adipiscing elit
                  pellentesque habitant morbi tristique senectus et netus. Laoreet sit amet cursus
                  sit amet dictum sit amet justo. Eu mi bibendum neque egestas. Morbi enim nunc
                  faucibus a pellentesque sit amet porttitor. Sit amet consectetur adipiscing elit
                  ut aliquam purus sit amet. Nulla pharetra diam sit amet nisl suscipit adipiscing
                  bibendum est. Neque viverra justo nec ultrices dui sapien. Leo urna molestie at
                  elementum eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
                  Ultricies lacus sed turpis tincidunt id aliquet.
               </Text>
            </VStack>
         </Box>
      </>
   );
};

export default PrivacyPolicy;
