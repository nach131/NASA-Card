import React, { Component } from "react";
import CardList from "./CardList";
import Album from "./Album";
import Button from "react-bootstrap/Button";
import Resultados from './Resultados'

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      href: "",
      items: [],
      total_hits: "",
      paginas: [],
    };
  }

  componentDidMount() {
    this.fetchFoto();

  }

  fetchFoto = async () => {
    this.setState({ loading: true, error: null })

    try {
      const respuesta = await fetch(
        `https://images-api.nasa.gov/search?q=saturn&page=${this.state.nextPage}`
      );
      const responseData = await respuesta.json();
      console.log(responseData)
      this.setState({
        loading:false,
        href: responseData.collection.href,
        items: responseData.collection.items,
        total_hits: responseData.collection.metadata.total_hits,
        nextPage: this.state.nextPage +1,
        paginas: responseData.collection.links,
      });
    } catch (error){
      this.setState({
        loading:false,
        error:error,
      })
    }
  };

  render() {
    const items = this.state.items;
    const loading = this.state.loading;
    const error = this.state.error;
    const total_hits= this.state.total_hits;
    return (
      <Album>
      <Resultados total_hits={total_hits} error={error}/>
        <CardList items={items} loading={loading}/>
        
        <div className="col text-center">
        {!this.state.loading && (
        <Button className="btn-next" onClick={() => this.fetchFoto()}>Mas</Button>
        )}
        </div>
      </Album>
    );
  }
}
export default Cards;
