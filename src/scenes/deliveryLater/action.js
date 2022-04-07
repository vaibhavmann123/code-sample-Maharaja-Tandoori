import * as actionType from '../../redux/actions/ActionsType';

export const findStoreRequested = payload => {
  return {type: actionType.FETCH_FIND_STORE_REQUESTED, payload};
};

export const findStoreSuccess = data => {
  return {type: actionType.FETCH_FIND_STORE_SUCCESS, payload: data};
};

export const findStoreFail = error => {
  return {type: actionType.FETCH_FIND_STORE_FAILED, payload: error};
};
