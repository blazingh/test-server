import axios from 'axios';
import { useState } from 'react';

function useGetData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = (params) => {
    setLoading(true);
    axios
      .get(url, { params: params })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, fetch };
}
export default useGetData;
