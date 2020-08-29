import  { useState, useEffect } from 'react';

function useNasa(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}`
        );
        const json = await response.json();

        setResults(
          json.collection.items.map((item,i) => {
            return item;
          })
        );
      } finally {
        setLoading(false);
      }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

export default useNasa;