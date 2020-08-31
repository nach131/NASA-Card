import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Gallery({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e, url, title) => {
    e.preventDefault();
    setUrlImage(url);
    setImageTitle(title);
    // console.log(url);
    setShow(true);
  };

  return (
    <>
      <div className="content">
        {images.map((img, i) => (

          <div key={i} className="img-box">
            <a href={img.url} onClick={e => handleShow(e, img.url, img.title)}>
              <img alt="sample text" src={img.url}/>
            </a>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{imgTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={urlImage} alt={imgTitle} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Gallery;
