export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export function attemptLogin() {
  return {
    type: USER_LOGIN_REQUEST
  };
}

export function loginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS
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
