import {
  FETCH_SPECIFY_DISH_SUCCESS,
  FETCH_SPECIFY_DISH_FAILED,
} from '../actions/ActionsType';

const INITIAL_STATE = {
  specifyDish: {},
  error: {},
};

const specifyDishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SPECIFY_DISH_SUCCESS:
      return {
        ...state,
        specifyDish: action.payload,
        error: '',
      };
    case FETCH_SPECIFY_DISH_FAILED:
      return {
        ...state,
        specifyDish: '',
        error: action.payload,
        isLoader: true,
      };
    default:
      return state;
  }
};
export default specifyDishReducer;
