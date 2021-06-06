const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_TYPES':
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case 'FETCH_TYPES_RESOLVE':
      return {
        ...state,
        types: {
          isLoading: false,
          data: payload,
          error: null,
        },
      };
    case 'FETCH_TYPES_REJECT':
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

export default pokemons;
