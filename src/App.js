import React, { Component } from "react";
import CardList from "./components/CardList";
import Album from "./components/Album";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: "",
      items: [],
      total_hits: "",
    };
  }

  componentDidMount() {
    this.fetchFoto();
    // fetch("https://images-api.nasa.gov/search?q=curiosity&page=15")
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({
    //       href: responseData.collection.href,
    //       items: responseData.collection.items,
    //       total_hits: responseData.collection.metadata.total_hits,
    //     });
    //   });
  }

  fetchFoto = async () => {
    const respuesta = await fetch(
      'https://images-api.nasa.gov/search?q=curiosity&page=5'
    );
    const responseData = await respuesta.json();
    this.setState({
      href: responseData.collection.href,
      items: responseData.collection.items,
      total_hits: responseData.collection.metadata.total_hits,
    });
  };

  render() {
    const items = this.state.items;
    return (
      <Album>
        <CardList items={items} />
      </Album>
    );
  }
}
export default App;
