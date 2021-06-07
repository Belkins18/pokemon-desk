const initialState = {
  loading: false,
};

const app = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case 'FETCH_APP_TYPES_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_APP_TYPES_END':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default app;
