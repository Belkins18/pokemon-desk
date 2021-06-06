import { combineReducers } from 'redux';

import app from './app';

const createRootReducer = () =>
  combineReducers({
    app,
  });

export default createRootReducer;
