import "./App.css";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
    </div>
  );
};

export default App;
