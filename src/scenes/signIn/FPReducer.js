import {
  FETCH_FORGET_PASSWORD_FAILED,
  FETCH_FORGET_PASSWORD_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  forgetResponse: {},
  error: {},
  isLoader: true,
};

const FPReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetResponse: action.payload,
        error: '',
        isLoader: false,
      };
    case FETCH_FORGET_PASSWORD_FAILED:
      return {
        ...state,
        forgetResponse: '',
        error: action.payload,
        isLoader: true,
      };

    default:
      return state;
  }
};
export default FPReducer;
