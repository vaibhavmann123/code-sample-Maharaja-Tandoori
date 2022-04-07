import {
  FETCH_RESET_PASSWORD_FAILED,
  FETCH_RESET_PASSWORD_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  resetResponse: {},
  error: {},
  isLoader: true,
};

const RPReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetResponse: action.payload,
        error: '',
        isLoader: false,
      };
    case FETCH_RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetResponse: '',
        error: action.payload,
        isLoader: true,
      };

    default:
      return state;
  }
};
export default RPReducer;
