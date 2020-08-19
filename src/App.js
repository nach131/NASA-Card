import React, { Component } from "react";
import CardList from "./components/CardList";
import Album from "./components/Album";
import Button from "react-bootstrap/Button";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      href: "",
      items: [],
      total_hits: "",
    };
  }

  componentDidMount() {
    this.fetchFoto();

  }

  fetchFoto = async () => {
    this.setState({ loading: true, error: null })

    try {
      const respuesta = await fetch(
        `https://images-api.nasa.gov/search?q=curiosity&page=${this.state.nextPage}`
      );
      const responseData = await respuesta.json();
      this.setState({
        loading:false,
        href: responseData.collection.href,
        items: responseData.collection.items,
        total_hits: responseData.collection.metadata.total_hits,
        nextPage: this.state.nextPage +1,
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
    return (
      <Album>
        <CardList items={items} loading={loading} error={error}/>
        
        <div className="col text-center">
        {!this.state.loading && (
        <Button className="btn-next" onClick={() => this.fetchFoto()}>Mas</Button>
        )}
        </div>
      </Album>
    );
  }
}
export default App;
