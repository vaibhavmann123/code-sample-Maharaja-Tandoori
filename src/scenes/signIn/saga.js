import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
//API
import {Login, ForgotPassword, ResetPassword} from '../../services/apiConts';
import {postCall} from '../../services/apiCalls';
//ACTIONS
import {
  loginSuccess,
  loginFail,
  forgetPasswordSuccess,
  forgetPasswordFail,
  resetPasswordSuccess,
  resetPasswordFail,
} from './actionCreator';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

import {redirectTo} from '../../redux/redirect/Action';

function* loginRequested({payload}) {
  console.log('payload', payload);
  try {
    const data = `phone=${payload.payload.username}&password=${payload.payload.password}&device_token=${payload.payload.device_token}`;
    const res = yield postCall(Login, data, {headers: {}});
    if (res.status === 200) {
      yield AsyncStorage.setItem('token', res.data.response.token);
      yield put(loginSuccess(res.data));
      console.log('res.data', res.data);
      payload.onSuccess(res.data);
    } else {
      yield put(loginFail(res.data));
      payload.onFail(res.data);
    }
  } catch (error) {}
}
function* FPRequested({payload}) {
  console.log('FPPAYLOAD', payload);
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const res = yield postCall(ForgotPassword, payload.payload, {
      headers,
    });
    if (res.status === 200) {
      yield put(forgetPasswordSuccess(res.data));
      console.log('res.data', res.data);
      payload.onSuccess(res.data);
    } else {
      console.log('FPFail', res.data);

      yield put(forgetPasswordFail(res.data));
      // payload.onFail(res.data);
    }
  } catch (error) {}
}

function* RPRequested({payload}) {
  console.log('RPPAYLOAD', payload);
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const res = yield postCall(ResetPassword, payload.payload, {
      headers,
    });
    if (res.status === 200) {
      yield put(resetPasswordSuccess(res.data));
      console.log('res.data', res.data);
      // payload.onSuccess(res.data);
    } else {
      console.log('FPFail', res.data);

      yield put(resetPasswordFail(res.data));
      // payload.onFail(res.data);
    }
  } catch (error) {}
}

export default function* loginSaga() {
  yield takeEvery(actionType.LOGIN_REQUESTED, loginRequested);
  yield takeEvery(actionType.FETCH_FORGET_PASSWORD_REQUESTED, FPRequested);
  yield takeEvery(actionType.FETCH_RESET_PASSWORD_REQUESTED, RPRequested);
}
