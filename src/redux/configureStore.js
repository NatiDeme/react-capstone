import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import strengthHeroReducer from './strength/Strength';
import agilityHeroReducer from './agility/Agility';
import intelligenceHeroReducer from './intelligence/Intelligence';
import allHeroReducer from './main/Home';

const reducer = combineReducers({
  strengthHeroReducer,
  agilityHeroReducer,
  intelligenceHeroReducer,
  allHeroReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
