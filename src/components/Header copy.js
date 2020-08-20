// Peticion API ok, trae los datoa Array FotosDias


import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import IMG2 from "../images/pexels-pixabay-256152.jpg";
import IMG3 from "../images/pexels-spacex-23789.jpg";
import IMG4 from "../images/pexels-spacex-60132.jpg";

class Header extends React.Component {
  constructor(props) {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    super(props);
    this.state = {
      diaHoy: date,
      loading: true,
      error: null,
      fotosDias:[],
      fotodia: {},
    };
  }

  componentDidMount() {
    this.fetchFotoDay();
  }

  masDoceDias() {
    var dateFormat = require('dateformat');
    var current = new Date(); //Hoy
    var saltoDay = new Date(current.getTime() - 1036800000); // - 1 day in ms 86400000
    return dateFormat(saltoDay, "yyyy-mm-dd")
  }


  // componentDidUpdate(){
  //   this.fetchFotoDay();
  // }
  fetchFotoDay = async () => {
    const Url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${this.masDoceDias()}&end_date=${this.state.diaHoy}`
      // "https://api.nasa.gov/planetary/apod?api_key=EUDrgZhfxHUUr5GwtaCDh0FjiAxQsboz8BoR7MCY&date=";
  
    // console.log(Url + this.masDoceDias());
    this.setState({ loading: true, error: null });
    try {
      const respuesta = await fetch(Url);
      // const respuesta = await fetch(Url + this.masDoceDias());
      const respuestaData = await respuesta.json();
      console.log(respuestaData);
      this.setState({
        // fotodia: respuestaData,
        fotosDias: respuestaData,
        // diaHoy:this.state.diaHoy,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <Carousel
        id="carousel"
        interval="7000"
        className="carousel-inner slider"
        data-pause="false"
        controls=""
        indicators=""
      >
        <CarouselItem>
          <img className="d-block w-100" src={this.state.fotodia.url} alt="" />
          <Carousel.Caption>
            <h3 className="text-right">
              {this.state.fotodia.title}
            </h3>
            <p>
              {this.state.fotodia.explanation}
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={IMG2} alt="" />
          <Carousel.Caption>
            <h3 className="text-right">
              {this.state.fotodia.title}
            </h3>
            <p>
              {this.state.fotodia.explanation}
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={IMG3} alt="" />
          <Carousel.Caption>
            <h3 className="text-right">
              {this.state.fotodia.title}
            </h3>
            <p>
              {this.state.fotodia.explanation}
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={IMG4} alt="" />
          <Carousel.Caption>
            <h3 className="text-right">
              {this.state.fotodia.title}
            </h3>
            <p>
              {this.state.fotodia.explanation}
            </p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    );
  }
}
export default Header;
