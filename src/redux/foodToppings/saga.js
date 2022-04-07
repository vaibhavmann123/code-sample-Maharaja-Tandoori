import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../actions/ActionsType';
import {getCall} from '../../services/apiCalls';
import {specifyDishSuccess, specifyDishFail} from './action';

function* FetchSpecifyDishRequest({payload}) {
  console.log('specifyDishUrl', payload);
  try {
    const res = yield getCall(payload, {headers: {}});
    console.log('specifyDishUrl.res.data', res);

    if (res.status === 200) {
      yield put(specifyDishSuccess(res.data.response));
    } else {
      console.log('failRED', res.data);
      yield put(specifyDishFail(res.data));
    }
  } catch (error) {}
}
export default function* specifyDishSaga() {
  yield takeEvery(
    actionType.FETCH_SPECIFY_DISH_REQUESTED,
    FetchSpecifyDishRequest,
  );
}
