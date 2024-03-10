import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Inquire from "./pages/Inquire";
import Services from "./pages/Services";

function App() {
  return (
    <Grid
      templateAreas={`"nav"
                      "body"
                      "footer"`}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"body"}>
        <Services />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
