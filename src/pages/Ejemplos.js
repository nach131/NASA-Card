import React, { Component } from 'react'

import EjemploApi from '../components/Api/EjemploApi'



class Ejemplos extends Component {
  // state = {  }
  render() {

    switch (this.props.match.path) {
      case "/sun":
        return <EjemploApi ejemplo="sun"/>;
        case "/earth":
          return <EjemploApi ejemplo="earth"/>;
      default:
        return <EjemploApi  pedakos='Arbol' />;
    }
  }
}

export default Ejemplos;