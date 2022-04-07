import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {Text, View, TouchableOpacity, Alert} from 'react-native';
import style from './style';
import {TextBox, SubmitButton} from '../../components/atoms';
import {Header} from '_molecules';
import {loginRequested, forgetPasswordRequested} from './actionCreator';
import {ResetPassword, FPasswordModal} from '../verificationModal';

import {BlurView} from '@react-native-community/blur';

export default function SignIn(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('1234567890'),
    [password, setPassword] = useState('admin'),
    [isBlur, setIsBlur] = useState(false),
    [isResetPasswordShow, setIsResetPasswordShow] = useState(false),
    [otpModel, setOtpModel] = useState(false),
    [resetPassword, setResetPassword] = useState(false);

  ///LOGIN REQUEST
  async function onLoginPress() {
    const payload = {
      username: username,
      password: password,
      device_token:
        'eEyfELlhSGGfIT6MCjLwp4:APA91bFmjxuLztdb6GoCC8WkbAVXbtl1r_PvGC4veHVzhYalBduQqPnh85HpB8sv006pvYtIH33Ri3svIJduu-ucA6ixVFVxem14IQdgTHq3YKWF-XOyhL_iZVcv5J5yqGE86A-uz8Sq',
    };
    const onSuccess = data => {
      props.navigation.navigate('mainScreen');
    };
    const onFail = err => {
      Alert.alert('Invalid Credentials');
    };
    dispatch(loginRequested({payload, onSuccess, onFail}));
  }
  //OTP MODEL OPEN
  const handelOtpModel = () => {
    setIsBlur(true);
    setOtpModel(true);
  };
  //Handel verify model
  const handelVerifyModel = () => {
    setIsBlur(false);
    setOtpModel(false);
    props.navigation.navigate('mainScreen');
  };
  //POPUP OPEN
  const handelOpenFPassword = () => {
    setIsBlur(true), setIsResetPasswordShow(true);
  };
  //POPUP CLOSE
  const handelCloseFPassword = () => {
    setIsBlur(false), setIsResetPasswordShow(false);
  };
  //FORGET PASSWORD REQUEST
  function forgetPasswordRequest() {
    const payload = {
      phone: resetPassword,
    };
    const onSuccess = data => {
      console.log('data', data);
      Alert.alert(data.message);
      handelOtpModel();
      handelCloseFPassword();
    };
    const onFail = err => {
      Alert.alert('Invalid Pnone No.');
    };
    dispatch(forgetPasswordRequested({payload, onSuccess, onFail}));
  }

  return (
    <>
      <View style={style.mainView}>
        {isBlur && (
          <BlurView
            style={style.blurView}
            blurType="dark"
            blurAmount={40}
            reducedTransparencyFallbackColor="black"
          />
        )}
        <FPasswordModal onClick={handelVerifyModel} FPVisible={otpModel} />
        <ResetPassword
          onCancel={handelCloseFPassword}
          IsResetPassword={isResetPasswordShow}
          onChangeText={t => setResetPassword(t)}
          handelResetPassword={() => forgetPasswordRequest()}
        />
        <Header title={'Welcome to Maharaja'} Screen="signIn" {...props} />
        <View style={{paddingBottom: 10}}>
          <TextBox
            image={require('_assets/images/phone.png')}
            // style={style.textLogo}
            text="Enter Phone No"
            onChangeText={t => setUsername(t)}
          />
          <TextBox
            image={require('_assets/images/password.png')}
            // style={style.textLogo}
            text="Enter Password"
            secondIcon={require('_assets/images/eye.png')}
            onChangeText={t => setPassword(t)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handelOpenFPassword}>
            <Text style={style.forget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <SubmitButton
          text="Sign In"
          onPress={() => onLoginPress()}
          // onPress={() => props.navigation.navigate('mainScreen')}
        />
      </View>
    </>
  );
}
