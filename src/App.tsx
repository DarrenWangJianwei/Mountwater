import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import Burger from "./components/nav/burger/burger";
import Menu from "./components/nav/menu/menu";
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
            <Route path="/projects/:index" component={Projects} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
