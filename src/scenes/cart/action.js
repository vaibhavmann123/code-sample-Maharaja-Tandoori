import * as actionType from '../../redux/actions/ActionsType';

// menu Actions

export const addToCartRequested = payload => {
  return {type: actionType.ADD_TO_CART_REQUESTED, payload};
};
export const addToCartSuccess = data => {
  return {type: actionType.ADD_TO_CART_SUCCESS, payload: data};
};

export const addToCartFail = error => {
  return {type: actionType.ADD_TO_CART_FAILED, payload: error};
};
