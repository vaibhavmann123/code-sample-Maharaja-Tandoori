import {combineReducers} from 'redux';
//REDUCER
import loginReducer from '../scenes/signIn/reducer';
import redirectReducer from '../redux/redirect/Reducer';
import signupReducer from '../scenes/signupNext/reducer';
import FPReducer from '../scenes/signIn/FPReducer';
import RPReducer from '../scenes/signIn/RPReducer';
import findStoreReducer from '../scenes/deliveryLater/reducer';
import menuReducer from '../scenes/comboMenu/reducer';
import specifyDishReducer from './foodToppings/reducer';
import addToCartReducer from '../scenes/cart/reducer';

const appReducer = combineReducers({
  login: loginReducer,
  redirect: redirectReducer,
  signUp: signupReducer,
  forgetPassword: FPReducer,
  resetPassword: RPReducer,
  findStore: findStoreReducer,
  menuItem: menuReducer,
  specifyDish: specifyDishReducer,
  cartAdded: addToCartReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUESTED') {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
