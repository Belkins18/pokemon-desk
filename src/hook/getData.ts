import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConfigEndpointType } from '../config';
import { getPokemonsAction, getPokemonsState } from '../store/pokemons';

type TData<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
};

const useData = <T>(endpoint: ConfigEndpointType, query: object, deps: Array<any> = []): TData<T> => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAction<T>(endpoint, query));
  }, deps);

  const { isLoading, data, error } = useSelector(getPokemonsState);

  return {
    // @ts-ignore
    data,
    isLoading,
    isError: error,
  };
};

export default useData;
