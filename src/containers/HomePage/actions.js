export const GET_EDITORIAL_REQUEST = 'GET_EDITORIAL_REQUEST';
export const GET_EDITORIAL_SUCCESS = 'GET_EDITORIAL_SUCCESS';
export const GET_EDITORIAL_FAILURE = 'GET_EDITORIAL_FAILURE';

export const GET_CHART_REQUEST = 'GET_CHART_REQUEST';
export const GET_CHART_SUCCESS = 'GET_CHART_SUCCESS';
export const GET_CHART_FAILURE = 'GET_CHART_FAILURE';

//Editorial Action Creators
export function getEditorialRequest() {
  return {
    type: GET_EDITORIAL_REQUEST
  };
}

export function editorialSuccess(editorial) {
  return {
    type: GET_EDITORIAL_SUCCESS,
    editorial
  };
}

export function editorialFailure(error) {
  return {
    type: GET_EDITORIAL_FAILURE,
    error
  };
}

//Chart Action creators
export function getChartRequest(id) {
  return {
    type: GET_CHART_REQUEST,
    id
  };
}

export function chartSuccess(chart) {
  return {
    type: GET_CHART_SUCCESS,
    chart
  };
}

export function chartFailure(error) {
  return { type: GET_CHART_FAILURE, error };
}
