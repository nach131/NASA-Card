import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from './Cards';
import NotFound from "./NotFound";
import Layout from "./Layout";
import Animacion from "../pages/Animacion";
import Year2019 from '../pages/PictureDay'
import Year2018 from '../pages/PictureDay'
import Year2017 from '../pages/PictureDay'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/year/2017" component={Year2017} />
          <Route exact path="/year/2018" component={Year2018} />
          <Route exact path="/year/2019" component={Year2019} />
          <Route exact path="/ani" component={Animacion} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
