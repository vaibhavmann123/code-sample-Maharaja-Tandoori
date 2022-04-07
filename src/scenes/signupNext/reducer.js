import {
  FETCH_USER_SIGNUP_SUCCESS,
  FETCH_USER_SIGNUP_FAILED,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  signResponse: {},
  error: {},
  isLoader: true,
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signResponse: action.payload,
        error: '',
        isLoader: false,
      };
    case FETCH_USER_SIGNUP_FAILED:
      return {
        ...state,
        signResponse: '',
        error: action.payload,
        isLoader: true,
      };

    default:
      return state;
  }
};
export default signupReducer;
