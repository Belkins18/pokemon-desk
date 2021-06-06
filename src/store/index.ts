import { combineReducers } from 'redux';

import app from './app';
import pokemons from './pokemons';

const createRootReducer = () =>
  combineReducers({
    app,
    pokemons,
  });

export default createRootReducer;
