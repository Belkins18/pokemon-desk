import { useEffect, useState } from 'react';
import req from '../utils/request';

const useData = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint);
        // eslint-disable-next-line no-console
        console.log(result);
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
