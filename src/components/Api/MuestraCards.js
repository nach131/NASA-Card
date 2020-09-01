import React, { Component, useState } from 'react'

import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";



function CardListItem({ postData }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);



  const handleClose = () => setShow(false);
  const handleShow = (e, url, title) => {
    e.preventDefault();
    setUrlImage(url);
    setImageTitle(title);
    // setImageExpl(explanation);
    // console.log(url);
    setShow(true);
  };


  let wordToRender;
  if (postData.data[0].keywords) {
    wordToRender = postData.data[0].keywords.map((word, i) => {
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
        <a href={postData.links[0].href} onClick={e => handleShow(e, postData.links[0].href, postData.data[0].title)}>
          <Card.Img variant="top" src={postData.links[0].href} />
        </a>
        <Card.Body>
          <Card.Title className="mb-0">
            {postData.data[0].nasa_id}
          </Card.Title>
          <div className="badges mb-2">{wordToRender}</div>
          <Card.Text>{postData.data[0].description}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header className="p-2">
          <Modal.Title>{imgTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-2">
          <img src={urlImage} alt="" />
          {/* <Modal.Dialog>dedede</Modal.Dialog> */}
        </Modal.Body>
      </Modal>

    </>
  )
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

