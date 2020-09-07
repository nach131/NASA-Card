import React, { Component } from 'react'

import Gallery from '../components/Gallery'
import Img2019 from '../data/2019'
import Img2018 from '../data/2018'
import Img2017 from '../data/2017'
import Img2016 from '../data/2016'
import Img2015 from '../data/2015'
import Img2014 from '../data/2014'
import Img2013 from '../data/2013'
import Img2012 from '../data/2012'
import Img2011 from '../data/2011'
import Img2010 from '../data/2010'


class PictureDay extends Component {
  // state = {  }
  render() {
    switch (this.props.match.path) {
      case "/year/2019":
        return <Gallery images={Img2019} />;
      case "/year/2018":
        return <Gallery images={Img2018} />;
      case "/year/2017":
        return <Gallery images={Img2017} />;
      case "/year/2016":
        return <Gallery images={Img2016} />;
      case "/year/2015":
        return <Gallery images={Img2015} />;
      case "/year/2014":
        return <Gallery images={Img2014} />;
      case "/year/2013":
        return <Gallery images={Img2013} />;
      case "/year/2012":
        return <Gallery images={Img2012} />;
      case "/year/2011":
        return <Gallery images={Img2011} />;
      case "/year/2010":
        return <Gallery images={Img2010} />;
        default:
          return <Gallery images={Img2010} />;
    }
  }
}

export default PictureDay;