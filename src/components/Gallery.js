import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import play from '../images/play-alt.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

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

  function Video() {
    switch (imgMedia) {
      case "video":
        return (
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe title={imgTitle} src={urlImage}
              alt={imgTitle} allowfullscreen="">
            </iframe>
          </div>
        );
      case "vimeo":
        return (
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe title={imgTitle} src={urlImage}
              alt={imgTitle} allowfullscreen="">
            </iframe>
          </div>
        )
      case "html":
        return (
          <a href={urlImage} target="_blank" rel="noopener noreferrer">{imgTitle} </a>
        )
      default:
        return (
          <a href={urlHDimage} target="_blank" rel="noopener noreferrer">
            <img src={urlImage} alt={imgTitle} />
          </a>
        )
    }
  }
  function ImgVideo({ media, url }) {
    // console.log(url)
    switch (media) {
      case "video":
        const imgvideo = url.slice(30, 41);
        const http = `http://img.youtube.com/vi/${imgvideo}/0.jpg`;
        return (
          <>
            <div className="video-gallery-overlay">
              <img src={play} className="video-play-gallery" alt=""/>
            </div>
            <img className="img-gallery" alt="it's a video" src={http} />
          </>
        )
      case "vimeo":
        const imgvimeo = url.slice(31, 40);
        const httpvimeo = `https://vumbnail.com/${imgvimeo}.jpg`;
        return (
          <>
            <div className="video-gallery-overlay">
              <img src={play} className="video-play-gallery" alt=""/>
            </div>
            <img className="img-gallery" alt="it's a video" src={httpvimeo} />
          </>
        )
        case "html":
        return (
          <FontAwesomeIcon className="icon-ext" icon={faExternalLinkAlt} size="9x" />
        )
        case "other":
          return (
            <FontAwesomeIcon className="icon-ext" icon={faExternalLinkAlt} size="9x" />
          )
      default:
        return (
          <img alt="Uppps ... !!!" src={url} />
        )
      
    }
  }


  return (
    <React.Fragment>
      <div className="content pt-5">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a  href={img.url} onClick={e => handleShow(e, img.url, img.hdurl, img.title, img.explanation, img.media_type)}>
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
