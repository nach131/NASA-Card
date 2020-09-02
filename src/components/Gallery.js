import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Gallery({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [urlHDimage, setUrlHDimage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [imgExpl, setImageExpl] = useState(null);
  const [imgMedia, setMedia] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e, url, hdurl, title, explanation, media) => {
    e.preventDefault();
    setUrlImage(url);
    setUrlHDimage(hdurl);
    setImageTitle(title);
    setImageExpl(explanation);
    setMedia(media);
    console.log(media);
    setShow(true);
  };

  function ImgVideo() {
    if (imgMedia === 'video') {
      return (
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe src={urlImage}
            alt={imgTitle} allowfullscreen="">

          </iframe>
        </div>

      )
    } else {
      return (
        <a href={urlHDimage} target="_blank">
          <img src={urlImage} alt={imgTitle} />
        </a>
      )
    }
  }


  return (
    <>
      <div className="content">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a href={img.url} onClick={e => handleShow(e, img.url, img.hdurl, img.title, img.explanation, img.media_type)}>
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
          {/* <a href={urlHDimage} target="_blank">
            <img src={urlImage} alt={imgTitle} />
          </a> */}
          <ImgVideo />
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
