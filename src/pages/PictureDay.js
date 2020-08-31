import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Gallery from '../components/Gallery'
import Img2019 from '../data/2019'





class PictureDay extends Component {
  // state = {  }
  render() {
    console.log(this.props.match.path)
    const year = this.props.match.path
    if (year === "/year/2019") {
      return <Gallery images={Img2019} />
    }
    return (
      <Container className="py-5">
        <Row>

         <h1>NADA</h1>

        </Row>
      </Container>

    );
  }
}

export default PictureDay;