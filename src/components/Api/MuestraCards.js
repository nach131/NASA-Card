import React, { Component } from 'react'

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class CardListItem extends React.Component {
  render() {

    let wordToRender;
    if (this.props.postData.data[0].keywords) {
      wordToRender = this.props.postData.data[0].keywords.map((word, i) => {
        return (
          <ul key={i} className="list-unstyled keyword">
            <span className="badge badge-warning">
              <li>{word}</li>
            </span>
          </ul>
        );
      });
    }


    return (
      <>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src={this.props.postData.links[0].href} />
          {console.log(this.props.postData.links)}
          <Card.Body>
            <Card.Title className="mb-0">
            {this.props.postData.data[0].nasa_id}
            </Card.Title>
            <div className="badges mb-2">{wordToRender}</div>
            <Card.Text>{this.props.postData.data[0].description}</Card.Text>
          </Card.Body>
        </Card>

      </>
    )
  }
}




class MuestraCards extends Component {
  // state = {  }
  render() {
    const items = this.props.MuestraItems
    const loading = this.props.loading
    return (
      <Container fluid={true} className="py-4">
        <Row>

          {/* {items.map(item => <video autoPlay loop key={item} src={item} />)} */}
          {loading ? (
            <h1>DAME SI MAMI FOTOS</h1>
          ) : (
              items.map((postData, i) => (
                <div key={i} className="col-xl-3 col-md-4">
                  {/* {console.log(postData)} */}
                  <CardListItem postData={postData} />
                  {/* <p className="test">{postData.data[0].date_created}</p> */}
                  {/* <p className="test">{postData.links[0].href}</p> */}
                </div>

              ))
            )}
        </Row>
      </Container>

    );
  }
}

export default MuestraCards;

