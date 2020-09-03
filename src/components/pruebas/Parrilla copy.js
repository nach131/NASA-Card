import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Parrilla extends Component {
  render() {
    return (
      <div id="parrilla">
        <div id="cards_landscape_wrap-2">
          <Container >
            <Row >

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <Link to="/earth">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img className="card-img-top"
                          src="https://images-assets.nasa.gov/image/a-sky-view-of-earth-from-suomi-npp_16611703184_o/a-sky-view-of-earth-from-suomi-npp_16611703184_o~thumb.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-container">
                        <h6>Title 01</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s.
                    </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000763/GSFC_20171208_Archive_e000763~thumb.jpg"
                          alt=""
                        />
                      </div>
                      <div class="text-container">
                        <h6>Title 02</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s.
                    </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://images-assets.nasa.gov/image/0201587/0201587~thumb.jpg"
                          alt=""
                        />
                      </div>

                      <div class="text-container">
                        <h6>Title 03</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s.
                    </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://images-assets.nasa.gov/image/PIA22486/PIA22486~thumb.jpg"
                          alt=""
                        />
                      </div>
                      <div class="text-container">
                        <h6>Title 04</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s.
                    </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default Parrilla;