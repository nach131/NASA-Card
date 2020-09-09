import React from "react";

import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Logo from '../images/NASA_Worm_logo.svg'
import enunpimpam from '../images/enunpimpam.png'

// import useGiphy from '../components/Test/useGiphy'

function Menu() {

  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('');
  // const [results, loading] = useGiphy(query);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo}
            width="100"
            // height="30"
            className="d-inline-block align-top"
            alt="nasa logo" />
          <img src={enunpimpam}
            // width="100"
            height="28"
            // height="30"
            className="d-inline-block align-top pl-2"
            alt="enunpimpam logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="">
      
            <NavDropdown title="Astronomy Picture of the Day" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/year/2000">2000</NavDropdown.Item>
              <NavDropdown.Item href="/year/2001">2001</NavDropdown.Item>
              <NavDropdown.Item href="/year/2002">2002</NavDropdown.Item>
              <NavDropdown.Item href="/year/2003">2003</NavDropdown.Item>
              <NavDropdown.Item href="/year/2004">2004</NavDropdown.Item>
              <NavDropdown.Item href="/year/2005">2005</NavDropdown.Item>
              <NavDropdown.Item href="/year/2006">2006</NavDropdown.Item>
              <NavDropdown.Item href="/year/2007">2007</NavDropdown.Item>
              <NavDropdown.Item href="/year/2008">2008</NavDropdown.Item>
              <NavDropdown.Item href="/year/2009">2009</NavDropdown.Item>
              <NavDropdown.Item href="/year/2010">2010</NavDropdown.Item>
              <NavDropdown.Item href="/year/2011">2011</NavDropdown.Item>
              <NavDropdown.Item href="/year/2012">2012</NavDropdown.Item>
              <NavDropdown.Item href="/year/2013">2013</NavDropdown.Item>
              <NavDropdown.Item href="/year/2014">2014</NavDropdown.Item>
              <NavDropdown.Item href="/year/2015">2015</NavDropdown.Item>
              <NavDropdown.Item href="/year/2016">2016</NavDropdown.Item>
              <NavDropdown.Item href="/year/2017">2017</NavDropdown.Item>
              <NavDropdown.Item href="/year/2018">2018</NavDropdown.Item>
              <NavDropdown.Item href="/year/2019">2019</NavDropdown.Item>
              <NavDropdown.Item href="/year/2020">2020</NavDropdown.Item>
            </NavDropdown>

            {/* <Form className="align-self-center"
              onSubmit={e => {
                e.preventDefault();
                setQuery(search);
              }}>

              <InputGroup>

              <Form.Control id="input" name="buscar"
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar Gifs!">
              </Form.Control>
              <InputGroup.Append>
              <Button className="btn btn-next" type="submit">
                Buscar
              </Button>
              </InputGroup.Append>
              </InputGroup>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;

