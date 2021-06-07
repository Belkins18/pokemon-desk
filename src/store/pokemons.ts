import { Dispatch } from 'redux';
import req from '../utils/request';
import { ConfigEndpointEnum } from '../config';
import { IPokemons, ITypesRequest } from '../interface/pokemons';
import { IStateRequest } from '../interface';
import { IInitialState } from './index';

// eslint-disable-next-line no-shadow
export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',

  SET_POKEMONS = 'SET_POKEMONS',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: Array<string>;
}

type ActionTypes = TypesAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
  pokemons: {
    data: null | IPokemons;
    isLoading: boolean;
    isError?: any;
  };
}

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    isError: null,
  },
  pokemons: {
    isLoading: false,
    isError: null,
    data: null,
  },
};

// Reducer
const pokemons = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          isError: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: payload,
          isError: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          isError: payload,
        },
      };
    case PokemonsActionTypes.SET_POKEMONS:
      return {
        ...state,
        pokemons: {
          ...payload,
        },
      };
    default:
      return state;
  }
};

// Selectors
export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getPokemonsState = (state: IInitialState) => state.pokemons.pokemons;

// Actions
export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(ConfigEndpointEnum.getPokemonTypes, {});

      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_RESOLVE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_REJECT,
        payload: error,
      });
    }
  };
};

export const getPokemonsAction = (data: IPokemons, isLoading: boolean, isError: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: PokemonsActionTypes.SET_POKEMONS,
      payload: {
        data,
        isLoading,
        isError,
      },
    });
  };
};

export default pokemons;
