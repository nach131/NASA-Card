import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from './Cards';
import NotFound from "./NotFound";
import Layout from "./Layout";
import Animacion from "../pages/Animacion";
import Gallery from './Gallery'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/ani" component={Animacion} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
