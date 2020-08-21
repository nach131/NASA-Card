import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Animacion.css';
import { Jumbotron } from 'react-bootstrap';


const styles = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Animacion extends React.Component {
  render() {
    return (
      <Container id="animacion">
        <Row className="col-info">
          <StyleRoot>
            <div className="animacion">
              <div id="informacion" style={styles.bounceInDown}>
                <h3 >A ocurrido el siguiente error:</h3>
                <h5> error </h5>
              </div>
            </div>
          </StyleRoot>
        </Row>
      </Container>
    );
  }
}




export default Animacion;
