import React from "react";
//react bootstrap components
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



class CardListItem extends React.Component {
  render() {

    let itemsToRender;
    if (this.props.item.data[0].keywords) {
      itemsToRender = this.props.item.data[0].keywords.map((word, i) => {

        return (
          <ul  className="list-unstyled keyword">
            <span key={i} className="badge badge-warning" >
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
<<<<<<< HEAD
              <span className="badge badge-warning">{this.props.item.data[0].keywords + " "}</span>
=======
             
                 {itemsToRender}
             

              {/* <span className="badge badge-warning">{this.props.item.data[0].keywords + " "}</span> */}

>>>>>>> fa34a42af1814cbd52205407deea9e9cc5e45ffe
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
