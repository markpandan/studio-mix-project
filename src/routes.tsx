import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import Layout from "./pages/Layout";
import Services from "./pages/Services";
import Post from "./pages/Post";
import Products from "./pages/Products";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         { index: true, element: <Home /> },
         { path: "services", element: <Services /> },
         { path: "gallery", element: <Gallery /> },
         { path: "aboutus", element: <AboutUs /> },
         { path: "inquire", element: <Inquire /> },
         { path: "post/:id", element: <Post /> },
         { path: "products", element: <Products /> },
      ],
   },
]);

export default router;
