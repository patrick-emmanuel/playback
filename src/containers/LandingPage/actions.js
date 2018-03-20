export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export function attemptLogin() {
  return {
    type: USER_LOGIN_REQUEST
  };
}

export function loginSuccess(popup) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload:{
      popup
    }
  };
}

export function loginFailure(error) {
  return {
    type: USER_LOGIN_FAILURE,
    payload: {
      error
    }
  };
}
