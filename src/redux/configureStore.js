import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import strengthHeroReducer from './strength/Strength';
import agilityHeroReducer from './agility/Agility';
import intelligenceHeroReducer from './intelligence/Intelligence';

const reducer = combineReducers({
  strengthHeroReducer,
  agilityHeroReducer,
  intelligenceHeroReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
