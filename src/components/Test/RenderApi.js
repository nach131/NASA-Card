import React, { useState } from "react";


import useGiphy from './useGiphy'

export default function AsyncHooks() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);
  // console.log(results)
  return (
    <div className="form px-5 ">
      <h1>Componente separado</h1>
      <br />
      <form
      className="align-self-center"
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <div className="input-group">

          <input
            id="input" name="buscar"
            className="form-control"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar Gifs!"
          />
          <div class="input-group-append">
            <button className="btn btn-next" type="submit">Buscar</button>
          </div>
        </div>
      </form>

      <br />
      {loading ? (
        <h1>GIVE ME GIFS</h1>
      ) : (
          results.map(item => <video autoPlay loop key={item} src={item} />)
        )}
    </div>
  );
}
