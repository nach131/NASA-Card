import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from './Cards';
import NotFound from "./NotFound";
import Layout from "./Layout";
import Animacion from "../pages/Animacion";
import Gallery from './Gallery'
import Year2019 from '../pages/PictureDay'
import Year2018 from '../pages/PictureDay'
import Year2017 from '../pages/PictureDay'
import Year2016 from '../pages/PictureDay'
import Year2015 from '../pages/PictureDay'
import Year2014 from '../pages/PictureDay'
import Year2013 from '../pages/PictureDay'
import Year2012 from '../pages/PictureDay'
import Year2011 from '../pages/PictureDay'
import Year2010 from '../pages/PictureDay'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/year/2010" component={Year2010} />
          <Route exact path="/year/2011" component={Year2011} />
          <Route exact path="/year/2012" component={Year2012} />
          <Route exact path="/year/2013" component={Year2013} />
          <Route exact path="/year/2014" component={Year2014} />
          <Route exact path="/year/2015" component={Year2015} />
          <Route exact path="/year/2016" component={Year2016} />
          <Route exact path="/year/2017" component={Year2017} />
          <Route exact path="/year/2018" component={Year2018} />
          <Route exact path="/year/2019" component={Year2019} />
          <Route exact path="/ani" component={Animacion} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
