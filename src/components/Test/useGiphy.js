import  { useState, useEffect } from 'react';

function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=gvYWMneH5JY1E3kCJsXsWn9VkoCtRcMQ&q=${query}&limit=10&offset=0&rating=G&lang=en`
        );
        const json = await response.json();

        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
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

export default useGiphy;