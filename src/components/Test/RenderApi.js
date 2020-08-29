import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

import useGiphy from './useGiphy'
import MuestraGif from './MuestraGif'

export default function AsyncHooks() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
  // console.log(results)
  return (
    <div className="form px-5 pt-3">
      {/* <h4>Busca por palabras</h4> */}
      <br />
      <Form className="align-self-center"
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
      </Form>
      <br />
 
      <MuestraGif MuestraTodosGifs={results}
        loading={loading}
      />
    </div>
  );
}
