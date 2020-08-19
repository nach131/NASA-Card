import React from "react";
import { Carousel, CarouselItem } from 'react-bootstrap'
import IMG2 from "../images/pexels-pixabay-256152.jpg";
import IMG3 from "../images/pexels-spacex-23789.jpg";
import IMG4 from "../images/pexels-spacex-60132.jpg";

class Header extends React.Component {

  constructor(props) {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    super(props)
    this.state = {
      diaHoy: date,
      loading: true,
      error: null,
      fotodia: {}
    }
  }

  componentDidMount() {
    this.fetchFotoDay()
  }

  fetchFotoDay = async () => {
    const Url = "https://api.nasa.gov/planetary/apod?api_key=EUDrgZhfxHUUr5GwtaCDh0FjiAxQsboz8BoR7MCY&date="
    // console.log(Url + this.state.diaHoy)
    this.setState({ loading: true, error: null })

    try {
      const respuesta = await fetch(Url + this.state.diaHoy);
      const respuestaData = await respuesta.json();
      console.log(respuestaData)
      this.setState({
        fotodia: respuestaData,
        // diaHoy:this.state.diaHoy,
      })
    }
    catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  }


  render() {
    return (
      <Carousel id="carousel" interval="7000" className="carousel-inner slider" data-pause="false" controls="" indicators="" >

        <CarouselItem >
          <img className="d-block w-100" src={this.state.fotodia.url} alt="" />
          <Carousel.Caption>
            <h3>{this.state.fotodia.title}</h3>
            <p>{this.state.fotodia.explanation}</p>
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
