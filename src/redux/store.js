import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './reducer';

const reducer = combineReducers({
  greetings: greetingReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
