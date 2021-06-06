import { Dispatch } from 'redux';
import req from '../utils/request';
import { ConfigEndpointEnum, ConfigEndpointType } from '../config';
import { IPokemons, ITypesRequest } from '../interface/pokemons';
import { IStateRequest } from '../interface';
import { IInitialState } from './index';

// eslint-disable-next-line no-shadow
export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',

  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
  FETCH_POKEMONS_FINISH = 'FETCH_POKEMONS_FINISH',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: Array<string>;
}
interface PokemonAction<T> {
  type: PokemonsActionTypes;
  payload?: {
    isLoading?: boolean;
    data?: T | null;
    error?: any;
  };
}

type ActionTypes = TypesAction;
type ActionPokemonTypes<T> = PokemonAction<T>;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
  pokemons: {
    isLoading: boolean;
    data: null | IPokemons;
    error?: any;
  };
}

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
  pokemons: {
    isLoading: false,
    data: null,
    error: null,
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
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: payload,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          isLoading: true,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          data: payload,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          error: payload,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_FINISH:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          isLoading: false,
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

export const getPokemonsAction = <T>(endpoint: ConfigEndpointType, query: object) => {
  return async (dispatch: Dispatch<ActionPokemonTypes<T>>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS });
    try {
      const response = await req(endpoint, query);

      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_RESOLVE,
        // @ts-ignore
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_REJECT,
        payload: error,
      });
    } finally {
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_FINISH,
      });
    }
  };
};

export default pokemons;
