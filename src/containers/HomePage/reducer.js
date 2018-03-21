import {
  GET_EDITORIAL_REQUEST,
  GET_EDITORIAL_SUCCESS,
  GET_EDITORIAL_FAILURE
} from './actions';

const initialState = {
  loading: false,
  editorial: null,
  error: null
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EDITORIAL_REQUEST:
      return { loading: true };
    case GET_EDITORIAL_SUCCESS:
      return { ...state, loading: false, editorial: action.editorial };
    case GET_EDITORIAL_FAILURE:
      return { loading: false, error: action.error };
    default:
      return state;
  }
}
