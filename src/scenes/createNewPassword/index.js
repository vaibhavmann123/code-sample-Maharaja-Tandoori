import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import {TextBox, SubmitButton} from '../../components/atoms';
import Header from '_molecules/header';

export default function CreateNewPass() {
  return (
    <View style={style.mainView}>
      <View
        style={{
          paddingBottom: 30,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.logoText}>Create new password</Text>
      </View>
      {/* <View style={{width: '100%'}}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.logoText}>Create new password</Text>
      </View> */}

      <View>
        <TextBox
          image={require('_assets/images/mail.png')}
          // style={style.textLogo}
          // text="New Password"
          image1={require('_assets/images/eye.png')}
          style2={style.eye}
        />
      </View>

      <View>
        <SubmitButton text="Sign Up" />
      </View>
    </View>
  );
}
