import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Animacion.css';

// import Gallery from '../components/Gallery'
// import Img2019 from '../data/2019'

// import ModalVideo from '../components/TestModal/ModalVideo'

setTimeout(() => {
}, 2000)

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
                <h3 >Esta es la animacion.</h3>
                <h5> error </h5>
              </div>
            </div>
          </StyleRoot>
        </Row>
        {/* <Gallery images={Img2019} /> */}
       {/* <ModalVideo/> */}

      </Container>
    );
  }



}




export default Animacion;
