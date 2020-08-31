import React, { Component } from 'react'

class MuestraGif extends Component {
  // state = {  }
  render() {
    const items = this.props.MuestraTodosGifs
    const loading = this.props.loading
    return (
      <div className="row">
        {/* <h1>Titulo MuestraGif</h1> */}
        {/* {items.map(item => <video autoPlay loop key={item} src={item} />)} */}
        {loading ? (
          <h1>DAME SI PAPI GIFS</h1>
        ) : (
            items.map(item => <video autoPlay loop key={item} src={item} />)
          )}
        <br />
      </div>
    );
  }
}

export default MuestraGif;

