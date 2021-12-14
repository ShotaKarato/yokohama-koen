import "./App.css";
// components
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Access from "./components/Access";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
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
      </div>
    </Router>
  );
}

export default App;
