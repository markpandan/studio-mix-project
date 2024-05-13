import { ReactNode } from "react";

interface Props {
   children: ReactNode;
   heading: string;
   reverseToggle?: boolean;
   primaryColor?: boolean;
   image?: { src: string; alt: string };
}

export default Props;
