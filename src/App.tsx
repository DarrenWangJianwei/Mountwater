import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home1";
import Contact from "./pages/Contact";
import About from "./pages/About";
import VictoriaSuareCentre from "./components/projects/victoriaSquareCentre";
import CapitalCityCentreEast from "./components/projects/capitalCityCentreEast";
import CapitalCityCentreWest from "./components/projects/capitalCityCentreWest";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import Burger from "./components/nav/burger/burger";
import Menu from "./components/nav/menu/menu";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useOnClickOutside } from "./utils/hooks";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>

      <Router>
        <div className="Site-content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects/vicSquare">
              <VictoriaSuareCentre />
            </Route>
            <Route exact path="/projects/capCentreEast">
              <CapitalCityCentreEast />
            </Route>
            <Route exact path="/projects/capCentreWest">
              <CapitalCityCentreWest />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
