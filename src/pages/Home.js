import React, { Component } from 'react';
import Header from '../components/Header_data'
import RenderApi from '../components/Test/RenderApi'
export default class Home extends Component {

  render() {
    return (
      <>
      <Header/>
      <RenderApi/>
      </>
    )
  }
}
