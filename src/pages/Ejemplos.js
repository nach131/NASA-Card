import React, { Component } from 'react'

import EjemploApi from '../components/Api/EjemploApi'



class Ejemplos extends Component {
  // state = {  }
  render() {

    switch (this.props.match.path) {
      case "/sun":
        return <EjemploApi ejemplo="sun" />;
      case "/earth":
        return <EjemploApi ejemplo="earth" />;
      case "/curiosity":
        return <EjemploApi ejemplo="curiosity" />;
      case "/jupiter":
        return <EjemploApi ejemplo="jupiter" />;
      case "/saturn":
        return <EjemploApi ejemplo="saturn" />;
      case "/iss":
        return <EjemploApi ejemplo="iss" />;
      case "/dragon":
        return <EjemploApi ejemplo="dragon Spacecraft" />;
      case "/spacex":
        return <EjemploApi ejemplo="spacex" />;
      case "/apollo_lunar_module":
        return <EjemploApi ejemplo="Apollo Lunar Module" />;
      case "/lunar_surface":
        return <EjemploApi ejemplo="lunar surface" />;
      case "/saturn_v":
        return <EjemploApi ejemplo="saturn V" />;
      case "/discovery":
        return <EjemploApi ejemplo="discovery" />;


      default:
        return <EjemploApi pedakos='Arbol' />;
    }
  }
}

export default Ejemplos;