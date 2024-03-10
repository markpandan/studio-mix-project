import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

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
        <AboutUs />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
