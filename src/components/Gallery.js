import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import play from '../images/play-alt.svg'


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
    setShow(true);
  };

  //   const str = "https://www.youtube.com/embed/iRL268cXaqk?rel=0"; 
  //   const res = str.slice(30,41);
  // console.log(res)

  function Video() {
    if (imgMedia === 'video') {
      return (
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe title={imgTitle} src={urlImage}
            alt={imgTitle} allowfullscreen="">
          </iframe>
        </div>
      )
    } else {
      return (
        <a href={urlHDimage} target="_blank" rel="noopener noreferrer">
          <img src={urlImage} alt={imgTitle} />
        </a>
      )
    }
  }
  function ImgVideo({ media, url }) {
    // console.log(url)
    if (media === 'video') {
      const imgvideo = url.slice(30, 41);
      const http = `http://img.youtube.com/vi/${imgvideo}/0.jpg`
      return (
        <>
          <div className="video-gallery-overlay">
            <img src={play} className="video-play-gallery" />
          </div>
          <img className="img-gallery" alt="it's a video" src={http} />
        </>
      )
    } else {
      return (
        <img alt=" Upps !!!" src={url} />
      )
    }
  }

  return (
    <React.Fragment>
      <div className="content pt-5">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a href={img.url} onClick={e => handleShow(e, img.url, img.hdurl, img.title, img.explanation, img.media_type)}>
              {/* <img alt="sample text" src={img.url} /> */}
              <ImgVideo media={img.media_type} url={img.url} />
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
          <Video />
        </Modal.Body>
        <Modal.Footer className="p-1">
          <p className="p-modal">
            {imgExpl}
          </p>

        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
export default Gallery;
