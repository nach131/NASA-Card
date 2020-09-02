import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Resultados extends React.Component {

  render() {
    if (this.props.error) {
      return (
        <Container id="animacion">
          <Row className="col-info">
            <StyleRoot>
              <div id="informacion" style={styles.bounceInDown}>
                <h3 >A ocurrido el siguiente error:</h3>
                <h5>`${this.props.error.message}` </h5>
              </div>
            </StyleRoot>
          </Row>
        </Container>
      )
    }
    return (
      <Container id="animacion">
        <Row className="col-info">
          <StyleRoot>
            <div id="informacion" style={styles.bounceInDown}>
              <h5>Se han encontrado {this.props.total_hits} resultados</h5>
            </div>
          </StyleRoot>
        </Row>
      </Container>
    )
  }

  // 
}
export default Resultados;

