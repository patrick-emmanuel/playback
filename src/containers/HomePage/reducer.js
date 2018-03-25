import {
  GET_EDITORIAL_REQUEST,
  GET_EDITORIAL_SUCCESS,
  GET_EDITORIAL_FAILURE,
  GET_CHART_REQUEST,
  GET_CHART_SUCCESS,
  GET_CHART_FAILURE
} from './actions';

const editorialState = {
  loading: false,
  payload: null,
  error: null
};

export function editorialReducer(state = editorialState, action) {
  switch (action.type) {
    case GET_EDITORIAL_REQUEST:
      return { loading: true };
    case GET_EDITORIAL_SUCCESS:
      return { ...state, loading: false, payload: action.editorial };
    case GET_EDITORIAL_FAILURE:
      return { loading: false, error: action.error };
    default:
      return state;
  }
}

const chartState = {
  loading: false,
  payload: null,
  error: null
};

export function chartReducer(state = chartState, action) {
  switch (action.type) {
    case GET_CHART_REQUEST:
      return { loading: true };
    case GET_CHART_SUCCESS:
      return { ...state, loading: false, payload: action.chart };
    case GET_CHART_FAILURE:
      return { loading: false, error: action.error };
    default:
      return state;
  }
}
