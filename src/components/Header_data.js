import React, { Component } from "react";

import { Carousel, CarouselItem } from "react-bootstrap";

import data from '../data.json';

export default class Header_data extends Component {
  render() {
    return (
      <>
        <Carousel
          id="carousel"
          interval="3000"
          className="carousel-inner slider"
          data-pause="false"
          controls=""
          indicators="">
          {data.map((postData, index) => (
            <CarouselItem key={index}>
              <img className="d-block w-100" src={postData.url} alt="" />
              <Carousel.Caption className="mx-3">
              
            <h3 className="text-right">
              {postData.title}
            </h3>
            <p>
              {postData.explanation}
            </p>
          </Carousel.Caption>
            </CarouselItem>
        ))}
          </Carousel>
      </>
    )


  }
}