import React from "react";
//react bootstrap components
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



class CardListItem extends React.Component {
  render() {

    let wordToRender;
    if (this.props.item.data[0].keywords) {
      wordToRender = this.props.item.data[0].keywords.map((word, i) => {
        return (
          <ul key={i} className="list-unstyled keyword">
            <span className="badge badge-warning" >
              <li>
                {word}
              </li>
            </span>
          </ul>
        )
      });
    }


    return (
      <>
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src={this.props.item.links[0].href} />
          <Card.Body>
            <Card.Title className="mb-0">{this.props.item.data[0].nasa_id}</Card.Title>
            <div className="badges mb-2">
              {wordToRender}
            </div>
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
        {this.props.loading && (
          <div className="d-flex justify-content-center">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
          </div>
        )}
        <ul className="list-unstyled">
          <Row>
            {this.props.items.map((item, i) => {
              return (
                <div key={i} className="col-xl-3 col-md-4">
                  <li >
                    <CardListItem item={item} />
                  </li>
                </div>
              );
            })}
          </Row>
        </ul>

      </Container>

    );
  }
}

export default CardList;
