import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {TextBox, SubmitButton} from '../../components/atoms';
import Header from '_molecules/header/headerDelivery';
import Subheader from '_molecules/header/nowLaterpickup';

export default function PickupNow(props) {
  const [later, setLater] = useState({
      fontSize: 20,
      borderBottomColor: '#FF7121',
      fontWeight: '700',
      color: '#FF7121',
      borderBottomWidth: 1,
    }),
    [now, setNow] = useState({
      fontSize: 20,
      color: '#AEACAC',
      borderBottomColor: '#AEACAC',
      borderBottomWidth: 0,
      fontWeight: '700',
    });
  function handelActiveTab(activeTab) {
    switch (activeTab) {
      case 'now':
        setLater({
          color: '#AEACAC',
          borderBottomWidth: 0,
          fontSize: 20,
          borderBottomColor: '#AEACAC',
          fontWeight: '700',
        });
        setNow({
          color: '#FF7121',
          borderBottomWidth: 1,
          fontSize: 20,
          borderBottomColor: '#FF7121',
          fontWeight: '700',
        });
        break;
      case 'later':
        setNow({
          color: '#AEACAC',
          borderBottomWidth: 0,
          fontSize: 20,
          borderBottomColor: '#AEACAC',
          fontWeight: '700',
        });
        setLater({
          color: '#FF7121',
          borderBottomWidth: 1,
          fontSize: 20,
          borderBottomColor: '#FF7121',
          fontWeight: '700',
        });
        break;

      default:
        setNow({
          color: '#AEACAC',
          borderBottomWidth: 0,
          fontSize: 20,
          borderBottomColor: '#AEACAC',
          fontWeight: '700',
        });
        setLater({
          color: '#FF7121',
          borderBottomWidth: 1,
          fontSize: 20,
          borderBottomColor: '#FF7121',
          fontWeight: '700',
        });
    }
  }
  return (
    <View style={style.mainView}>
      <View style={style.headerView}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.text}>Select Order Type</Text>
      </View>

      <Header Screen="pickupNow" {...props} />

      {/* <Subheader Screen="pickupNow" {...props} /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '5%',
        }}>
        <TouchableOpacity onPress={() => handelActiveTab('now')}>
          <Text style={now}>Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelActiveTab('later')}>
          <Text style={later}>Later</Text>
        </TouchableOpacity>
      </View>

      <View style={style.textboxView}>
        <TextBox
          image={require('_assets/images/location.png')}
          // style={style.textLogo}
          text="Post Code, Suburb Or Store"
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
