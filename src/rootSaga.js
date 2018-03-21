import { all, fork } from 'redux-saga/effects';
import { editorialWatcher } from '../src/containers/HomePage/saga';

export default function* rootSaga() {
  yield all([fork(editorialWatcher)]);
}
