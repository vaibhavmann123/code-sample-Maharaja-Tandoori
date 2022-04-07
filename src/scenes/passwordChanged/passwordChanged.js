import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';

export default function PasswordChanged() {
  return (
    <View style={style.mainView}>
      <View>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.mainText}>Create new password</Text>
        <Text style={style.resetPassword}>Password Reset</Text>
        <Text style={style.passwordText}>
          Your password changed successfully
        </Text>
        <Text style={style.line}>_____________________________________</Text>
        <TouchableOpacity>
          <Text style={style.signIn}>Sign In Now</Text>
          <Text style={style.signLine}>_______</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
