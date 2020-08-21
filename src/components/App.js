import React from "react";

import { BrowserRouter, Switch,  Route } from "react-router-dom";
// import Header from './components/Header_data';
import Home from '../pages/Home';
// import Header from './Header_data'
import Cards from './Cards';
import Layout from './Layout';
import Animacion from '../pages/Animacion';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/header" component={Header} /> */}
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/ani" component={Animacion} />
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;