export const GET_EDITORIAL_REQUEST = 'GET_EDITORIAL_REQUEST';
export const GET_EDITORIAL_SUCCESS = 'GET_EDITORIAL_SUCCESS';
export const GET_EDITORIAL_FAILURE = 'GET_EDITORIAL_FAILURE';

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
    type: GET_EDITORIAL_SUCCESS,
    error
  };
}
