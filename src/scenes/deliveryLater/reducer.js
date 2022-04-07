import {
  FETCH_FIND_STORE_SUCCESS,
  FETCH_FIND_STORE_FAILED,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  findStore: {},
  error: {},
};

const findStoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FIND_STORE_SUCCESS:
      return {
        ...state,
        findStore: action.payload,
        error: '',
      };
    case FETCH_FIND_STORE_FAILED:
      return {
        ...state,
        findStore: '',
        error: action.payload,
        isLoader: true,
      };
    default:
      return state;
  }
};
export default findStoreReducer;
