import React, { useState } from "react";
import "./css/styles.css";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./store";
// components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Service from "./components/Service";
import Access from "./components/Access";
import Overlay from "./components/Overlay";

function App() {
  // state for toggling overlay
  const [visibility, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };
  return (
    <Provider store={store}>
      <Router>
        <div className={visibility ? "App overlay-open" : "App"}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home onClick={handleClick} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/access">
              <Access />
            </Route>
          </Switch>
          <Footer />
          <Overlay visibility={visibility} onClick={handleClick} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
