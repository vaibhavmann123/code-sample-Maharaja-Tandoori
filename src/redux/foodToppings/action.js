import * as actionType from '../actions/ActionsType';

// SPECIFY_DISH

export const specifyDishRequested = payload => {
  return {type: actionType.FETCH_SPECIFY_DISH_REQUESTED, payload};
};
export const specifyDishSuccess = data => {
  return {type: actionType.FETCH_SPECIFY_DISH_SUCCESS, payload: data};
};

export const specifyDishFail = error => {
  return {type: actionType.FETCH_SPECIFY_DISH_FAILED, payload: error};
};
