import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import { Global } from "./components/styles/global.style";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Global />
          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
