import React, { Component } from 'react'

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";


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
          {/* {console.log(this.props.postData.links[0].href)} */}
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
  render() {
    const items = this.props.MuestraItems
    const loading = this.props.loading
    return (
      <Container fluid={true} className="py-4">
        <Row>

          {loading ? (
            <Spinner animation="border" role="status" variant="warning mx-auto" >
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
              items.map((postData, i) => (
                <div key={i} className="col-xl-3 col-md-4">
                  {/* {console.log(postData)} */}
                  <CardListItem postData={postData} />
                </div>

              ))
            )}
        </Row>
      </Container>

    );
  }
}

export default MuestraCards;

