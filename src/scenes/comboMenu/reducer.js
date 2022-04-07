import {
  FETCH_MENU_ITEMS_SUCCESS,
  FETCH_MENU_ITEMS_FAILED,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  menuItem: {},
  error: {},
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        menuItem: action.payload,
        error: '',
      };
    case FETCH_MENU_ITEMS_FAILED:
      return {
        ...state,
        menuItem: '',
        error: action.payload,
        isLoader: true,
      };
    default:
      return state;
  }
};
export default menuReducer;
