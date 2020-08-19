import React, { Component } from "react";
import CardList from "./components/CardList";
import Album from "./components/Album";

//react bootstrap components
// import CardDeck from "react-bootstrap/CardDeck";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

//data for post
// import data from "./data.json";

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
    fetch("https://images-api.nasa.gov/search?q=curiosity&page=5")
      .then(response => response.json())
      // .then(collection => {this.setState({ cards: collection})});
      .then(responseData => {
        // console.log(responseData)
        this.setState({
          href: responseData.collection.href,
          items: responseData.collection.items,
          total_hits: responseData.collection.metadata.total_hits,
        });
      });
  }  

  render() {
    const items = this.state.items;
    // console.log(items)
    return (
      <Album>
        <CardList items={items} />
      </Album>
    );
  }
}
export default App;
