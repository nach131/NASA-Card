import React, { Component } from 'react'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import images from '../data/2019'




class PictureDay extends Component {
  // state = {  }
  render() {
    return (
      <Container className="py-5">
        <Row>
          <h1>toma</h1>

          {images.map((postData, i) => (

            < div key={i} >
              <p className="test">pedito</p>
              {console.log(postData)}
            </div>

          ))}
        </Row>
      </Container >

    );
  }
}

export default PictureDay;