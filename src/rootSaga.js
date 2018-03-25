import { all, fork } from 'redux-saga/effects';
import {
  editorialWatcher,
  chartWatcher
} from '../src/containers/HomePage/saga';

export default function* rootSaga() {
  yield all([fork(editorialWatcher), fork(chartWatcher)]);
}
