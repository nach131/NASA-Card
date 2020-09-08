import React, { useState } from 'react'

import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Spinner from "react-bootstrap/Spinner";


function CardListItem({ postData }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);

  const [urlhd, setUrlHd] = useState([])


  async function ImageHd(props) {
    try {
      const respuesta = await fetch(
        props
      );
      const items = await respuesta.json();
      setUrlHd(items)
    } finally {
    }
  }



  const handleClose = () => setShow(false);
  const handleShow = (e, url, title, json) => {
    e.preventDefault();
    setUrlImage(url);
    setImageTitle(title);
    // setImageExpl(explanation);
    ImageHd(json)

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
    <React.Fragment>
      <Card className="mb-4 shadow-sm">
        <a href={postData.links ? postData.links[0].href : null} onClick={e => handleShow(e, postData.links[0].href, postData.data[0].title, postData.href)}>
          <Card.Img variant="top" src={postData.links ? postData.links[0].href : null} />
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
          {/* <img src={urlImage} alt="" /> */}
          <a href={urlhd[0]} target="_blank" rel="noopener noreferrer">
            <img src={urlImage} alt="" />
          </a>
          {/* <Modal.Dialog>dedede</Modal.Dialog> */}
        </Modal.Body>
      </Modal>

    </React.Fragment>
  )
}


class MuestraCards extends React.Component {



  render() {
    const items = this.props.MuestraItems
    const loading = this.props.loading
    const hits = this.props.hits
    // console.log(items)

    const page = this.props.page

    function RestaPagina() {

      if (page === 1) {
        return (
          <h2 className="mx-auto pb-3">{hits} results</h2>
        )
      } else if (page >= 2) {
        const descuento = hits - (page * 100) + 100
        return (
          <h2 className="mx-auto pb-3">{descuento} results</h2>
        )
      } else {
        return (<></>)
      }
    }


    return (

      <Container fluid={true} className="py-4">
        <Row>
          {/* <h2 className="mx-auto">{hits}</h2> */}
          {loading ? (
            <></>
          ) : (

              <RestaPagina />
            )}
        </Row>
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

