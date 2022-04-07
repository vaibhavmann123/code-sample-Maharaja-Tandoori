import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {TextBox} from '../../components/atoms';
import Header from '_molecules/header/headerDelivery';
import Subheader from '_molecules/header/nowLaterpickup';

export default function PickupLater(props) {
  return (
    <View style={style.mainView}>
      <View style={style.headerView}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.text}>Select Order Type</Text>
      </View>

      <Header Screen="pickupLater" {...props} />

      <Subheader Screen="pickupLater" {...props} />

      <View style={style.textboxView}>
        <TextBox
          image={require('_assets/images/location.png')}
          // style={style.textLogo}
          // text="Post Code, Suburb Or Store"
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('comboMenu')}>
          <View style={style.containerButton}>
            <Text style={style.buttonText}>Next </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('mainScreen')}>
          <View style={style.containerButton}>
            <Text style={style.buttonText}> Previous </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
