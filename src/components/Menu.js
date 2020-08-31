import React, { useState } from "react";

import { Navbar, Nav, Container, NavDropdown, Form, Button, InputGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Logo from '../images/NASA_Worm_logo.svg'
import useGiphy from '../components/Test/useGiphy'


function Menu() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo}
            width="100"
            // height="30"
            className="d-inline-block align-top"
            alt="Nasa logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/cards">Curiosity</Nav.Link>
            <Nav.Link href="#">Apollo</Nav.Link>
            <NavDropdown title="Solar system" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mercury</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Venus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Earth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jupiter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saturn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Uranus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Neptune</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Pluto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Sun</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Moon</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Constellations" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ursa Major</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Ursa Minor</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Draco</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Pegasus</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">The zodiac constellations</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Astronomy Picture of the Day" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/year/2017">2017</NavDropdown.Item>
              <NavDropdown.Item href="/year/2018">2018</NavDropdown.Item>
              <NavDropdown.Item href="/year/2019">2019</NavDropdown.Item>
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

