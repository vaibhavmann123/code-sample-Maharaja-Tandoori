// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import loginSaga from '../scenes/signIn/saga';
import signupSaga from '../scenes/signupNext/saga';
import findStoreSaga from '../scenes/deliveryLater/saga';
import findMenuItemSaga from '../scenes/comboMenu/saga';
import specifyDishSaga from '../redux/foodToppings/saga';
import addToCartSaga from '../scenes/cart/saga';
export function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga(),
    findStoreSaga(),
    findMenuItemSaga(),
    specifyDishSaga(),
    addToCartSaga(),
  ]);
}
