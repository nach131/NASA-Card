import React, { Component } from 'react'

import Gallery from '../components/Gallery'
import Img2020 from '../data/2020'
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
import Img2009 from '../data/2009'
import Img2008 from '../data/2008'
import Img2007 from '../data/2007'
import Img2006 from '../data/2006'
import Img2005 from '../data/2005'
import Img2004 from '../data/2004'
import Img2003 from '../data/2003'
import Img2002 from '../data/2002'
import Img2001 from '../data/2001'
import Img2000 from '../data/2000'


class PictureDay extends Component {
  // state = {  }
  render() {
    switch (this.props.match.path) {
      case "/year/2020":
        return <Gallery images={Img2020} />;
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
      case "/year/2009":
        return <Gallery images={Img2009} />;
      case "/year/2008":
        return <Gallery images={Img2008} />;
      case "/year/2007":
        return <Gallery images={Img2007} />;
      case "/year/2006":
        return <Gallery images={Img2006} />;
      case "/year/2005":
        return <Gallery images={Img2005} />;
      case "/year/2004":
        return <Gallery images={Img2004} />;
      case "/year/2003":
        return <Gallery images={Img2003} />;
      case "/year/2002":
        return <Gallery images={Img2002} />;
      case "/year/2001":
        return <Gallery images={Img2001} />;
      case "/year/2000":
        return <Gallery images={Img2000} />;
      default:
        return <Gallery images={Img2020} />;
    }
  }
}

export default PictureDay;