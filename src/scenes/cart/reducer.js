import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  addToCart: {},
  error: {},
};

const addToCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        addToCart: action.payload,
        error: '',
      };
    case ADD_TO_CART_FAILED:
      return {
        ...state,
        addToCart: '',
        error: action.payload,
        isLoader: true,
      };
    default:
      return state;
  }
};
export default addToCartReducer;
