import { take, call, put } from 'redux-saga/effects';
import request from '../../utils/request'
import { USER_LOGIN_REQUEST } from './actions';
import { loginSuccess, loginFailure } from './actions';

const appCred = {
  id: 271642,
  redirectUrl: 'https://dizur.herokuapp.com',
  responseType: 'token'
};

const requestOptions = {
  url: `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/auth.php?app_id=${appCred.id}&redirect_uri=${appCred.redirectUrl}&response_type=${appCred.responseType}`
};

export function* loginWatcher() {
  while (true) {
    yield take(USER_LOGIN_REQUEST);
    yield call(login);
  }
}

function* login() {
  try {
    const response = yield call(request, requestOptions);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
