import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                      "body body"`}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"body"}>
        <Home />
      </GridItem>
    </Grid>
  );
}

export default App;
