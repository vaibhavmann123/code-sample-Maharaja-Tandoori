import * as actionsType from '../actions/ActionsType';

export function redirectTo(screen) {
  return {type: actionsType.REDIRECT_RQUESTED, payload: screen};
}

export function redirectWithParams(screen, data) {
  return {
    type: actionsType.REDIRECT_WITH_PARAMS_RQUESTED,
    payload: {screen, data},
  };
}
