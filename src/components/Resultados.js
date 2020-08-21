import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap/Container';



class Resultados extends React.Component {


  render() {
    if (this.props.error) {
      return (
        <Jumbotron fluid className="my-3">
        <h3>A ocurrido el siguiente error:</h3>
          <h5>`${this.props.error.message}` </h5>
        </Jumbotron>
      )

    } 
      return (
        <Jumbotron fluid className="my-3">

          <h5>Se han encontrado {this.props.total_hits} resultados</h5>
        </Jumbotron>
      )
    }

  // 
}
export default Resultados;

