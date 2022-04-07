import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from './style';

export default function Header(props) {
  return (
    <View>
      <View
        style={{
          paddingBottom: 20,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.welcome}>{props.title}</Text>
      </View>

      <View style={style.view}>
        <TouchableOpacity onPress={() => props.navigation.navigate('signIn')}>
          {props.Screen === 'signIn' ? (
            <View style={style.active}>
              <Text style={style.activeText}> Sign In </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Sign In </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('signUp')}>
          {props.Screen === 'signUp' ? (
            <View style={style.active}>
              <Text style={style.activeText}> Sign Up </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Sign Up </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
