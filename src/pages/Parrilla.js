import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import data from '../data/parrilla.json'

class Parrilla extends Component {
  render() {
    return (
      <div id="parrilla">
        <div id="cards_landscape_wrap-2">
          <Container className="pt-0" >
            <Row >
              {data.map((postData, i) => (
                <div key={i} className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                  <Link to={postData.link}>
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img className="card-img-top"
                            src={postData.href}
                            alt=""
                          />
                        </div>
                        <div className="text-container">
                          <h6>{postData.title}</h6>
                          <p className="text-parrilla">
                            {postData.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}


            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default Parrilla;