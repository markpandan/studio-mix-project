import { useEffect, useState } from "react";

const useTop = (top: boolean) => {
   const [isTop, setIsTop] = useState(top);
   /**
    * Used to detect if the user is at the top of the page.
    */
   useEffect(() => {
      const onScroll = () => {
         setIsTop(window.scrollY <= 80);
      };

      window.addEventListener("scroll", onScroll);

      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);

   return { isTop, setIsTop };
};

export default useTop;
