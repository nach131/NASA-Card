import React, { useState } from "react";
import { Form, Button, InputGroup, Row, ButtonGroup } from "react-bootstrap";

import useNasa from './useNasa'
import MuestraCards from './MuestraCards'


export default function AsyncHooks() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [tomate, setTomate] = useState('')
  const [page, setPage] = useState(0);

  const [results, loading, hits] = useNasa(query, page);

  function BotonNext() {

    return (
      <>
        <Button className="btn-next" >{page}</Button>
        <Button className="btn-next" onClick={e => {
          e.preventDefault();
          setQuery(tomate);
          // setQuery('sun');
          setPage(page + 1);
          window.scrollTo(0, 660)
        }} >Next</Button>
      </>
    )
  }

  function MuestraPagina() {
    const descuento = hits - (page * 100) + 100

    if (page === 0) {
      return ('')
    }
    else if (page === 1) {
      return (
        <ButtonGroup aria-label="One Next" className="mx-auto pb-5" size="sm">
          <BotonNext />
        </ButtonGroup>
      )
    } else if (descuento >= 100) {
      return (
        <ButtonGroup aria-label="Two Next" className="mx-auto pb-5" size="sm">
          <Button className="btn-next" onClick={e => {
            e.preventDefault();
            setQuery(tomate);
            // setQuery('sun');
            setPage(page - 1);
          }}>Prev</Button>
          <BotonNext />
        </ButtonGroup>
      )
    } else if (descuento <= 99 ) {
      return(<></>)
    }
  }


  return (

    <div id="buscar" className="pt-5">
      {/* <h4>Busca por palabras</h4> */}
      {/* <br /> */}
      <Form className="align-self-center"
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
      </Form>

      <MuestraCards
        MuestraItems={results}
        loading={loading}
        hits={hits}
        page={page}
      />

      <Row>
        <MuestraPagina />
      </Row>


    </div>

  );
}
