import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';
import { initialUserLogin } from './formModel';
import { homeReducer } from './containers/HomePage/reducer';

export default combineReducers({
  routing: routerReducer,
  home: homeReducer,
  ...createForms({
    login: initialUserLogin
  })
});
