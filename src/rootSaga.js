import { all, fork } from 'redux-saga/effects';
import { loginWatcher } from '../src/containers/HomePage/saga';

export default function* rootSaga() {
  yield all([fork(loginWatcher)]);
}
