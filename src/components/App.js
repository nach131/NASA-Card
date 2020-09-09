import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Animacion from "../pages/Animacion";
import Gallery from './Gallery'
import Ejemplos from '../pages/Ejemplos'
import Year2020 from '../pages/PictureDay'
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
import Year2009 from '../pages/PictureDay'
import Year2008 from '../pages/PictureDay'
import Year2007 from '../pages/PictureDay'
import Year2006 from '../pages/PictureDay'
import Year2005 from '../pages/PictureDay'
import Year2004 from '../pages/PictureDay'
import Year2003 from '../pages/PictureDay'
import Year2002 from '../pages/PictureDay'
import Year2001 from '../pages/PictureDay'
import Year2000 from '../pages/PictureDay'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/year/2000" component={Year2000} />
          <Route exact path="/year/2001" component={Year2001} />
          <Route exact path="/year/2002" component={Year2002} />
          <Route exact path="/year/2003" component={Year2003} />
          <Route exact path="/year/2004" component={Year2004} />
          <Route exact path="/year/2005" component={Year2005} />
          <Route exact path="/year/2006" component={Year2006} />
          <Route exact path="/year/2007" component={Year2007} />
          <Route exact path="/year/2008" component={Year2008} />
          <Route exact path="/year/2009" component={Year2009} />
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
          <Route exact path="/year/2020" component={Year2020} />
          <Route exact path="/ani" component={Animacion} />
          <Route exact path="/sun" component={Ejemplos} />
          <Route exact path="/curiosity" component={Ejemplos} />
          <Route exact path="/earth" component={Ejemplos} />
          <Route exact path="/jupiter" component={Ejemplos} />
          <Route exact path="/saturn" component={Ejemplos} />
          <Route exact path="/iss" component={Ejemplos} />
          <Route exact path="/dragon" component={Ejemplos} />
          <Route exact path="/spacex" component={Ejemplos} />
          <Route exact path="/apollo_lunar_module" component={Ejemplos} />
          <Route exact path="/lunar_surface" component={Ejemplos} />
          <Route exact path="/saturn_v" component={Ejemplos} />
          <Route exact path="/discovery" component={Ejemplos} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
