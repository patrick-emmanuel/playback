import { take, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { GET_EDITORIAL_REQUEST } from './actions';
import { editorialSuccess, editorialFailure } from './actions';

const requestOptions = {
  url: `https://api.deezer.com/editorial`
};

export function* editorialWatcher() {
  while (true) {
    yield take(GET_EDITORIAL_REQUEST);
    yield call(getEditorial);
  }
}

function* getEditorial() {
  try {
    const response = yield call(request, requestOptions);
    yield put(editorialSuccess(response.data));
  } catch (error) {
    yield put(editorialFailure(error));
  }
}
