import React from "react";
import { Container, Carousel, CarouselItem } from 'react-bootstrap'
import IMG1 from "../images/pexels-pixabay-2156.jpg";
import IMG2 from "../images/pexels-pixabay-256152.jpg";
import IMG3 from "../images/pexels-spacex-23789.jpg";
import IMG4 from "../images/pexels-spacex-60132.jpg";

class Header extends React.Component {
  render() {
    return (
      <Carousel  id="carousel" interval="7000" className="carousel-inner slider" data-pause="false" controls="" indicators="" >

        <CarouselItem >
          <img className="d-block w-100" src={IMG1} alt="" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem >
          <img className="d-block w-100" src={IMG2} alt="" />
        </CarouselItem>
        <CarouselItem >
          <img className="d-block w-100" src={IMG3} alt="" />
        </CarouselItem>
        <CarouselItem >
          <img className="d-block w-100" src={IMG4} alt="" />
        </CarouselItem>
      </Carousel>
    )
  }
}
export default Header;
