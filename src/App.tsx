import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App: React.FC = () => (
  <div>
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
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
