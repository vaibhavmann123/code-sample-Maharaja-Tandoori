import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
//API
import {Signup} from '../../services/apiConts';
import {postCall} from '../../services/apiCalls';
//ACTIONS
import {signupSuccess, signupFail} from './action';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {redirectTo} from '../../redux/redirect/Action';

function* signupRequested({payload}) {
  console.log('payload', payload);
  //   const headers = {
  //     token: `${yield AsyncStorage.getItem('token')}`,
  //     'Content-Type': 'application/json',
  //     accept: 'application/json',
  //   };
  try {
    const res = yield postCall(Signup, payload.data, {headers: {}});
    if (res.status === 200) {
      yield put(signupSuccess(res.data));
      console.log('res.data', res.data);
      payload.onSuccess(res.data);
    } else {
      yield put(signupFail(res.data));
      payload.onFail(res.data);
    }
  } catch (error) {}
}
export default function* signupSaga() {
  yield takeEvery(actionType.FETCH_USER_SIGNUP_REQUESTED, signupRequested);
}
