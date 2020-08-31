import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import Gallery from '../components/Gallery'
import Img2019 from '../data/2019'
import Img2018 from '../data/2018'
import Img2017 from '../data/2017'





class PictureDay extends Component {
  // state = {  }
  render() {
    console.log(this.props.match.path)
    const year = this.props.match.path
    // if (year === "/year/2019") {
    //   return <Gallery images={Img2019} />
    // }
    // return (
    //   <Container className="py-5">
    //     <Row>
    //      <h1>NADA</h1>
    //     </Row>
    //   </Container>
    // );
    switch (this.props.match.path) {
      case "/year/2019":
        return <Gallery images={Img2019} />;
      case "/year/2018":
        return <Gallery images={Img2018} />;
      case "/year/2017":
        return <Gallery images={Img2017} />;
    }
    return (
      <h1>esto</h1>
    )
  }
}

export default PictureDay;