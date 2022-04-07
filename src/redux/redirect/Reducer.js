import * as actionsType from '../actions/ActionsType';

const INTIAL_STATE = {
  screen: '',
  params: {},
};

export default function redirectReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case actionsType.REDIRECT_RQUESTED:
      return {
        screen: action.payload,
        params: {},
      };
    case actionsType.REDIRECT_WITH_PARAMS_RQUESTED:
      return {
        screen: action.payload.screen,
        params: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
}
