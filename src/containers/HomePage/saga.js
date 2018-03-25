import { take, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { GET_EDITORIAL_REQUEST, GET_CHART_REQUEST } from './actions';
import {
  editorialSuccess,
  editorialFailure,
  chartSuccess,
  chartFailure
} from './actions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function* editorialWatcher() {
  while (true) {
    yield take(GET_EDITORIAL_REQUEST);
    yield call(getEditorial);
  }
}

function* getEditorial() {
  try {
    yield put(showLoading());
    const response = yield call(request, {
      url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/editorial`
    });
    yield put(editorialSuccess(response.data));
  } catch (error) {
    yield put(editorialFailure(error));
  } finally {
    yield put(hideLoading());
  }
}

export function* chartWatcher() {
  while (true) {
    yield take(GET_CHART_REQUEST);
    yield call(getChart);
  }
}

function* getChart(id) {
  try {
    yield put(showLoading());
    const response = yield call(request, {
      url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${id}`
    });
    yield put(chartSuccess(response.data));
  } catch (error) {
    yield put(chartFailure(error));
  } finally {
    yield put(hideLoading());
  }
}
