import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from './NotFound.css'

function NotFound() {
  return (

    <Container className="py-5">
      <Row>
        <div id="cloud" className="col-12">
          <div className="cloud x1"></div>
          <div className="cloud x1_5"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
          <div className="c">
            <div className="_404"></div>
            {/* <hr></hr> */}
            <div className='_1'>THE PAGE</div>
            <div className='_2'>WAS NOT FOUND</div>
            <a className='btn-error' href='/'>BACK TO NASA</a>
          </div>
        </div>
      </Row>
    </Container>

  );
}

export default NotFound;
