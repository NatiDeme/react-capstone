import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import strengthHeroReducer from './strength/Strength';

const reducer = combineReducers({
  strengthHeroReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
