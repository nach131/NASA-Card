import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";



import useNasa from './useNasa'
import MuestraCards from './MuestraCards'

export default function AsyncHooks() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useNasa(query);
  // console.log(results)
  return (
    <div className="form pt-3">
      {/* <h4>Busca por palabras</h4> */}
      <br />
      <Form className="align-self-center"
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
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
      <br />
    
          <MuestraCards MuestraItems={results}
            loading={loading}
            className="col-xl-3 col-md-4"
          />


    </div>
  );
}
