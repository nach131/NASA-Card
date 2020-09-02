import { useState, useEffect } from 'react';

function useNasa(query, page) {
  const [results, setResults] = useState([]);
  const [hits, setHits] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=${page}`
        );
        const json = await response.json();
// console.log(json.collection.metadata.total_hits)

        setHits(json.collection.metadata.total_hits);
        setResults(
          json.collection.items.map((item, i) => {
            return item;
          })
        );
      }
      finally {
        setLoading(false);
      }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query, page]);
  // console.log(hits)
  return [results, loading, hits];

}

export default useNasa;