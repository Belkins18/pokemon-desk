import { Dispatch } from 'redux';
import req from '../utils/request';
import { ConfigEndpointEnum } from '../config';
import { ITypesRequest } from '../interface/pokemons';

// eslint-disable-next-line no-shadow
export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: Array<string>;
}

type ActionTypes = TypesAction;

const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

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
    default:
      return state;
  }
};

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(ConfigEndpointEnum.getPokemonTypes, {});
      console.log('### responce: ', response);

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

export default pokemons;
