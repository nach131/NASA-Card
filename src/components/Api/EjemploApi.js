import React, { useState } from "react";
import { Button, Row, ButtonGroup } from "react-bootstrap";

import useNasa from './useNasa'
import MuestraCards from './MuestraCards'

export default function AsyncHooks(props) {
  
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [tomate, setTomate] = useState('')
  const [page, setPage] = useState(1);
 
  const [results, loading] = useNasa(query, page);
  

  function MuestraPagina() {

    setQuery(props.ejemplo)

    if (query === '') {
      return('')
    }
    if (page === 1) {
      return (
        <ButtonGroup aria-label="Basic example" className="mx-auto" size="sm">     
          <Button className="btn-next" >{page}</Button>
          <Button className="btn-next" onClick={e => {
            e.preventDefault();
            setQuery(tomate);
            // setQuery('sun');
            setPage(page + 1);
          }} >Next</Button>
        </ButtonGroup>
      )
    } else {
      return (
        <ButtonGroup aria-label="Basic example" className="mx-auto" size="sm">
          <Button className="btn-next" onClick={e => {
            e.preventDefault();
            setQuery(tomate);
            // setQuery('sun');
            setPage(page - 1);
          }}>Prev</Button>
          <Button className="btn-next" >{page}</Button>
          <Button className="btn-next" onClick={e => {
            e.preventDefault();
            setQuery(tomate);
            // setQuery('sun');
            setPage(page + 1);
          }} >Next</Button>
        </ButtonGroup>
      )
    }
  }


  return (

    <div className="form pt-5">
      {/* <h4>Busca por palabras</h4> */}
      <br />
      {/* <Form className="align-self-center"
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
          setPage(1)
          setTomate(search);
        }}>

        <InputGroup className="InputBuscar mx-auto">
          <Form.Control id="input" name="buscar"
            className="form-control"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar Cositas en la Nasa...!!!">
          </Form.Control>
          <InputGroup.Append>
            <Button className="btn btn-next" type="submit">
              Buscar
              </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form> */}
      <br />
      <MuestraCards MuestraItems={results}
        loading={loading}
        className="col-xl-3 col-md-4"
      />
      <Row>
      <MuestraPagina /> 
      </Row>
    

    </div>
  );
}
