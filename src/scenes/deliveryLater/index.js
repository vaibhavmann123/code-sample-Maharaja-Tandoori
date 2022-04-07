import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import style from './style';
import {TextBox, TextArea} from '../../components/atoms';
import Header from '_molecules/header/headerDelivery';
import MainHeader from '_molecules/header/mainHeader';
import {CalendarModal} from '../verificationModal';
import {BlurView} from '@react-native-community/blur';
import {findStoreRequested} from './action';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function DeliveryLater(props) {
  const dispatch = useDispatch();
  const GOOGLE_PLACES_API_KEY = 'AIzaSyButCZ4W0lUhJnO9Wi2s7gkDjv58gDUrs4';
  const [Isblur, setIsblurs] = useState(false),
    [unit, setUnit] = useState(null),
    [street, setStreet] = useState(null),
    [instruction, setInstruction] = useState(null),
    [isModelOpen, setIsModelOpen] = useState(false),
    [active, setActive] = useState('later'),
    [later, setLater] = useState({
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

  const OnRequestDelNavigate = () => {
    setIsModelOpen(false);
    setIsblurs(false);
    props.navigation.navigate('deliveryLater');
  };

  const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);

  const oncloseCalender = () => {
    setIsModelOpen(false);
    setIsblurs(false);
  };

  function handelActiveTab(activeTab) {
    switch (activeTab) {
      case 'now':
        setActive('now');
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
        setActive('later');
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

  const handelDetails = () => {
    const payload = {
      pickup_when: active,
      unit_number: unit,
      street_address: street,
      delivery_instructions: instruction,
    };
    const onSuccess = data => {
      const menuItem =
        'http://3.23.245.115/maharaja-hotel/api/v1/estore/items?store=Maharaja-Preston-1&order_date=20211028&order_time=192855&order_type=Delivery&store=Maharaja-Preston-1&order_date=20211026&order_time=205123&order_type=Delivery&pickup_when=Now&pincode=3072&suburb=Victoria&city=Preston&lat=-37.7431353&lng=145.0081354&unit_number=22&street_address=Preston+VIC%2C+Australia&delivery_instructions=sss';
      props.navigation.navigate('comboMenu', {item: menuItem});
    };
    const onFail = err => {
      Alert.alert('Something went wrong');
    };
    dispatch(findStoreRequested({data: payload, onSuccess, onFail}));
  };
  return (
    <View style={style.mainView}>
      {Isblur && (
        <BlurView
          style={style.blurView}
          blurType="dark"
          blurAmount={30}
          reducedTransparencyFallbackColor="black"
        />
      )}

      <MainHeader title={'Select Order Type'} />

      <Header Screen="deliveryLater" {...props} />

      <View style={style.content}>
        <TouchableOpacity onPress={() => handelActiveTab('now')}>
          <Text style={now}>Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelActiveTab('later')}>
          <Text style={later}>Later</Text>
        </TouchableOpacity>
      </View>

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={style.textboxView}>
          <TextBox
            image={require('_assets/images/tag.png')}
            text="Unit Number"
            onChangeText={u => setUnit(u)}
          />

          <View
            style={{
              marginTop: '8%',
              marginHorizontal: '5%',
              width: '90%',
            }}>
            <Image
              source={require('_assets/images/location.png')}
              style={{
                height: 29,
                width: 29,
                position: 'absolute',
                left: 10,
                top: 10,
                tintColor: '#cacacf',
                zIndex: 99,
              }}
            />
            <GooglePlacesAutocomplete
              setAddressText={street}
              getAddressText={l => setStreet(l)}
              enablePoweredByContainer={false}
              returnKeyType={'default'}
              minLength={2}
              fetchDetails={true}
              placeholder="Street"
              styles={{
                textInput: {
                  borderRadius: 10,
                  borderWidth: 0.5,
                  borderColor: '#313131',
                  paddingLeft: 50,
                  height: 49,
                },
                container: {flex: 1},
              }}
              onPress={(data, details = null) => {
                console.log('dddd', data, details);
              }}
              query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
                components: 'country:aus',
                type: 'geocode',
              }}
            />
          </View>

          {/* <TextBox
            image={require('_assets/images/location.png')}
            text="Street"
            onChangeText={s => setStreet(s)}
          /> */}
          <TextArea
            image={require('_assets/images/password.png')}
            numberOfLines={5}
            multiline={true}
            placeholder={'Add delivery Instruction for rider'}
            onChangeText={i => setInstruction(i)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handelDetails}>
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
