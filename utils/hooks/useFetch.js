import { useEffect, useState } from 'react';

function useFetch(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [endpoint]);

  return [data];
}

export default useFetch;
