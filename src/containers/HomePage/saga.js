import { take, call, put } from 'redux-saga/effects';
import { authenticate } from './service';

import { USER_LOGIN_REQUEST } from './actions';

import { loginSuccess, loginFailure } from './actions';

export function* loginWatcher() {
  while (true) {
    yield take(USER_LOGIN_REQUEST);
    yield call(login);
  }
}

function* login() {
  try {
    yield call(authenticate);
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(error));
  }
}
