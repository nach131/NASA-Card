// Peticion API ok, trae los datoa Array FotosDias


import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";


class Header_api extends React.Component {
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


  fetchFotoDay = async () => {
    const Url = `https://api.nasa.gov/planetary/apod?api_key=EUDrgZhfxHUUr5GwtaCDh0FjiAxQsboz8BoR7MCY&start_date=${this.masDoceDias()}&end_date=${this.state.diaHoy}`
  
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
        interval="60000"
        className="carousel-inner slider"
        data-pause="false"
        controls=""
        indicators=""
      >
        {this.state.fotosDias.map((postData, i)=>(
        <CarouselItem>

          <img className="d-block w-100" src={postData.url} alt="" />
          <Carousel.Caption>
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
    );
  }
}
export default Header_api;
