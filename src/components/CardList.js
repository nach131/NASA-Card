import React from "react";
//react bootstrap components
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class CardListItem extends React.Component {
  render() {
    return (
      <>

            <Card key={this.props.item.data[0].nasa_id} className="mb-4 shadow-sm">
              <Card.Img variant="top" src={this.props.item.links[0].href} />
              <Card.Body>
                <Card.Title className="mb-0">{this.props.item.data[0].nasa_id}</Card.Title>
                <div className="badges mb-2">

                  <span className="badge badge-warning">{this.props.item.data[0].keywords + " "}</span>
                </div>
                {/* <p>TITULO:{postData.data[0].title}</p> */}
                <Card.Text >{this.props.item.data[0].description}</Card.Text>
              </Card.Body>
            </Card>

      </>
    );
  }
}

class CardList extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
        <CardDeck className=" no-gutters ">
        <div className="col-xl-3 col-md-4">

          <ul className="list-unstyled">
            {this.props.items.map(item => {
              return (
                <li key={item.id}>
                  <CardListItem item={item} />
                </li>
              );
            })}
          </ul>
          </div>

          </CardDeck>
        </Row>
      </Container>

    );
  }
}

export default CardList;
