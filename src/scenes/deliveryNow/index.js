import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import style from './style';
import {TextBox, SubmitButton} from '../../components/atoms';
import Header from '_molecules/header/headerDelivery';
import Subheader from '_molecules/header/nowLaterdelivery';
import {CalendarModal} from '../verificationModal';
import {BlurView} from '@react-native-community/blur';

export default function Delivery(props) {
  const [Isblur, setIsblurs] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false),
    [later, setLater] = useState({
      fontSize: 20,
      borderBottomColor: '#FF7121',
      fontWeight: '700',
      color: ' #FF7121',
      borderBottomWidth: 1,
    }),
    [now, setNow] = useState({
      fontSize: 20,
      color: '#AEACAC',
      borderBottomColor: '#AEACAC',
      borderBottomWidth: 1,
      fontWeight: '700',
    });

  const OnRequestDelNavigate = () => {
    setIsModelOpen(false);
    setIsblurs(false);
    props.navigation.navigate('deliveryLater');
  };

  const oncloseCalender = () => {
    setIsModelOpen(false);
    setIsblurs(false);
  };
  const openModel = () => {
    setIsblurs(true);
    setIsModelOpen(true);
  };
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

      <Header Screen="deliveryNow" {...props} />
      <View style={Style.content}>
        <TouchableOpacity onPress={() => handelActiveTab('now')}>
          <Text style={now}>Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelActiveTab('later')}>
          <Text style={later}>Later</Text>
        </TouchableOpacity>
      </View>
      {/* <Subheader Screen="deliveryNow" {...props} /> */}

      <ScrollView>
        <View style={style.textboxView}>
          <TextBox
            image={require('_assets/images/arrow.png')}
            // style={style.textLogo}
            // text="Unit Number"
          />

          <TextBox
            image={require('_assets/images/location.png')}
            // style={style.textLogo}
            // text="Street"
          />
        </View>

        <View style={style.container}>
          <View style={style.Section}>
            <Image
              source={require('_assets/images/password.png')}
              style={style.textLogo}
            />
            <TextInput
              style={{flex: 1}}
              placeholder="Add delivery instruction for rider"
              textAlignVertical={'top'}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={openModel}>
            <View style={style.containerButton}>
              <Text style={style.buttonText}> Next </Text>
            </View>
          </TouchableOpacity>
          <CalendarModal
            oncloseCalender={oncloseCalender}
            isModelOpen={isModelOpen}
            IsBlur={Isblur}
            OnRequestDelNavigate={OnRequestDelNavigate}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('mainScreen')}>
            <View style={style.containerButton}>
              <Text style={style.buttonText}> Previous </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
