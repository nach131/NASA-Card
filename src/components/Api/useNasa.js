import { useState, useEffect } from 'react';

function useNasa(query, page) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [nextPage, setNextPage] = useState(1);
  // const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=${page}`
        );
        const json = await response.json();
        setResults(
          json.collection.items.map((item, i) => {
            return item;
          })
        );
        // setNextPage(nextPage + 1);
      }
      finally {
        setLoading(false);

      }
      console.log(`https://images-api.nasa.gov/search?q=${query}&page=${page}`)

    }
    if (query !== '') {
      fetchData();
    } 
  

  }, [query, page]);
  return [results, loading];
}

export default useNasa;