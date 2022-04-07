import * as actionType from '../../redux/actions/ActionsType';
//LOGIN ACTION

export const loginRequested = payload => {
  return {type: actionType.LOGIN_REQUESTED, payload};
};

export const loginSuccess = data => {
  return {type: actionType.LOGIN_SUCCESS, payload: data};
};

export const loginFail = error => {
  return {type: actionType.LOGIN_FAILED, payload: error};
};
//LOGOUT ACTION
export const loginout = () => {
  return {type: actionType.LOGOUT_REQUESTED, payload: {}};
};
//FORGET PASSWORD ACTION
export const forgetPasswordRequested = payload => {
  return {type: actionType.FETCH_FORGET_PASSWORD_REQUESTED, payload};
};

export const forgetPasswordSuccess = data => {
  return {type: actionType.FETCH_FORGET_PASSWORD_SUCCESS, payload: data};
};

export const forgetPasswordFail = error => {
  return {type: actionType.FETCH_FORGET_PASSWORD_FAILED, payload: error};
};

//RESET PASSWORD ACTION
export const resetPasswordRequested = payload => {
  return {type: actionType.FETCH_RESET_PASSWORD_REQUESTED, payload};
};

export const resetPasswordSuccess = data => {
  return {type: actionType.FETCH_RESET_PASSWORD_SUCCESS, payload: data};
};

export const resetPasswordFail = error => {
  return {type: actionType.FETCH_RESET_PASSWORD_FAILED, payload: error};
};
