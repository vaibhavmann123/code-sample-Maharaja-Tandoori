import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
import {getCall} from '../../services/apiCalls';
import {menuSuccess, menuFail} from './action';

function* findMenuItemRequest({payload}) {
  console.log('MenuItemUrls', payload);
  try {
    const res = yield getCall(payload, {headers: {}});
    console.log('res.data', res);

    if (res.status === 200) {
      yield put(menuSuccess(res.data.response));
    } else {
      console.log('failRED', res.data);
      yield put(menuFail(res.data));
    }
  } catch (error) {}
}
export default function* findMenuItemSaga() {
  yield takeEvery(actionType.FETCH_MENU_ITEMS_REQUESTED, findMenuItemRequest);
}
