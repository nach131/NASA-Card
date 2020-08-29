import React, { Component } from 'react';
import Header from '../components/Header_data'
// import RenderApi from '../components/Test/RenderApi'
import BuscaApi from '../components/Api/BuscaApi'

export default class Home extends Component {

  render() {
    return (
      <>
      <Header/>
      {/* <RenderApi/> */}
      <BuscaApi/>
      </>
    )
  }
}
