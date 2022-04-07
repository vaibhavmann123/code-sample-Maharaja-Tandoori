import * as actionType from '../../redux/actions/ActionsType';

// menu Actions

export const menuRequested = payload => {
  return {type: actionType.FETCH_MENU_ITEMS_REQUESTED, payload};
};
export const menuSuccess = data => {
  return {type: actionType.FETCH_MENU_ITEMS_SUCCESS, payload: data};
};

export const menuFail = error => {
  return {type: actionType.FETCH_MENU_ITEMS_FAILED, payload: error};
};
