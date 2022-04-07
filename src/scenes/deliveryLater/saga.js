import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
//API
import {findStore} from '../../services/apiConts';
import {getCall} from '../../services/apiCalls';

//ACTIONS
import {findStoreFail, findStoreSuccess} from './action';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

function* findStoreRequest({payload}) {
  console.log('FindStorePayload', payload);
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
  };
  try {
    const data = `estore/delivery?store=Maharaja-Preston-1&order_date=''&order_time=''&order_type=Delivery&pickup_when=${payload.data.pickup_when}&pincode=3072&suburb=Victoria&city=Preston&lat=-37.7431353&lng=145.0081354&unit_number=${payload.data.unit_number}&street_address=${payload.data.street_address}&delivery_instructions=${payload.data.delivery_instructions}`;
    console.log('datata', findStore, data);
    const res = yield getCall(data, {headers: {}});
    if (res.status === 200) {
      yield put(findStoreSuccess(res.data));
      console.log('res.data', res.data);
      payload.onSuccess(res.data);
    } else {
      console.log('failRED', res.data);
      yield put(findStoreFail(res.data));
      payload.onFail(res.data);
    }
  } catch (error) {}
}

export default function* findStoreSaga() {
  yield takeEvery(actionType.FETCH_FIND_STORE_REQUESTED, findStoreRequest);
}
