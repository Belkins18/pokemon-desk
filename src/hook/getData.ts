import { useEffect, useState } from 'react';
import req from '../utils/request';

type TData<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
};

const useData = <T>(endpoint: string, query: object, deps: Array<any> = []): TData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const result = await req<T>(endpoint, query);
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
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
