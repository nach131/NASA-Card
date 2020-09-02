import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Gallery({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [imgExpl, setImageExpl] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e, url, title, explanation) => {
    e.preventDefault();
    setUrlImage(url);
    setImageTitle(title);
    setImageExpl(explanation);
    // console.log(url);
    setShow(true);
  };

  return (
    <>
      <div className="content">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a href={img.url} onClick={e => handleShow(e, img.hdurl, img.title, img.explanation)}>
              <img alt="sample text" src={img.url} />
            </a>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header className="p-2">
          <Modal.Title>{imgTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-2">
        <a href={urlImage} target="_blank">
          <img src={urlImage} alt={imgTitle} />
        </a>
          {/* <Modal.Dialog>dedede</Modal.Dialog> */}
        </Modal.Body>
        <Modal.Footer className="p-1">
          <p className="p-modal">
            {imgExpl}
          </p>
   
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Gallery;
