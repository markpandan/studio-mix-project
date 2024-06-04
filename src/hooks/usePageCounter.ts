import { useState } from "react";

const usePageCounter = (pages: number) => {
   /**
    * Used to keep track of incrementing and decrementing the page count.
    */
   const [active, setActive] = useState(0);
   const handlePages = (index: number) => {
      if (index >= pages) setActive(0);
      else if (index < 0) setActive(pages - 1);
      else setActive(index);
   };
   return { active, handlePages };
};

export default usePageCounter;
