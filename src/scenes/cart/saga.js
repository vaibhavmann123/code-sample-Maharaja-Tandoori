import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
//API
import {Cart} from '../../services/apiConts';
import {postCall} from '../../services/apiCalls';
//ACTIONS
import {addToCartSuccess, addToCartFail} from './action';

function* addToCartRequested({payload}) {
  console.log('add to cart', payload);

  try {
    const res = yield postCall(Cart, payload.data, {headers: {}});
    if (res.status === 200) {
      yield put(addToCartSuccess(res.data));
      console.log('add to cart sucess', res.data);
      payload.onSuccess(res.data);
    } else {
      yield put(addToCartFail(res.data));
      payload.onFail(res.data);
    }
  } catch (error) {}
}
export default function* addToCartSaga() {
  yield takeEvery(actionType.ADD_TO_CART_REQUESTED, addToCartRequested);
}
