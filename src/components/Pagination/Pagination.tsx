import { Button, HStack } from "@chakra-ui/react";
import usePageCounter from "../../hooks/usePageCounter";
import { projectColorSecondary } from "../../theme";
import { useEffect } from "react";

interface Props {
   pages: number;
   action: (value: number) => void;
}

const Pagination = ({ pages, action }: Props) => {
   const { active, handlePages: setActive } = usePageCounter(pages);

   useEffect(() => {
      action(active);
   }, [active]);

   if (pages > 0) {
      return (
         <HStack spacing={2} justify={"center"}>
            <Button
               onClick={() => {
                  setActive(active - 1);
               }}
            >
               Prev
            </Button>
            {[...Array(pages)].map((_, i) => (
               <Button
                  key={i}
                  bgColor={active == i ? projectColorSecondary : ""}
                  onClick={() => {
                     setActive(i);
                  }}
               >
                  {i + 1}
               </Button>
            ))}
            <Button
               onClick={() => {
                  setActive(active + 1);
               }}
            >
               Next
            </Button>
         </HStack>
      );
   } else {
      return;
   }
};

export default Pagination;
