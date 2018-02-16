import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';
import { initialUserLogin } from './formModel';

export default combineReducers({
  routing: routerReducer,
  ...createForms({
    login: initialUserLogin
  })
});
