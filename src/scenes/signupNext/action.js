import * as actionType from '../../redux/actions/ActionsType';
export const signupRequested = payload => {
  return {type: actionType.FETCH_USER_SIGNUP_REQUESTED, payload};
};

export const signupSuccess = data => {
  return {type: actionType.FETCH_USER_SIGNUP_SUCCESS, payload: data};
};

export const signupFail = error => {
  return {type: actionType.FETCH_USER_SIGNUP_FAILED, payload: error};
};
