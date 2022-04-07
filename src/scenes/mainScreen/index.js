import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import { SavedAddressModal, CalendarModal } from '../verificationModal';
import { BlurView } from '@react-native-community/blur';

export default function Mainscreen(props) {
  const [isAddress, setIsAddress] = useState(false);
  const [Isblur, setIsblurs] = useState(false);
  const [IsClanderblur, setIsClanderblur] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const OnRequestDelNavigate = () => {
    setIsAddress(false);
    setIsClanderblur(false);
    setIsModelOpen(false);
    setIsblurs(false);
    props.navigation.navigate('deliveryLater');
  };
  const OnRequestCalOpen = () => {
    setIsModelOpen(true);
    setIsAddress(false);
    setIsClanderblur(false);
    setIsblurs(true);
  };
  const oncloseCalender = () => {
    setIsModelOpen(false);
    setIsAddress(false);
    setIsClanderblur(false);
    setIsblurs(false);
  };
  const openModel = () => {
    setIsAddress(true);
    setIsblurs(true);
  };
  const onRequestClose = () => {
    setIsAddress(false);
    setIsblurs(false);
  };
  //console.log('mainScreen props', props)
  return (
    <>
      <View style={style.mainView}>
        {Isblur && (
          <BlurView
            style={style.blurView}
            blurType="dark"
            blurAmount={30}
            reducedTransparencyFallbackColor="black"
          />
        )}
        <ImageBackground
          resizeMode="cover"
          style={style.backgroundImage}
          source={require('_assets/images/backgroundImage.png')}>
          <View>
            <Image
              style={style.logo}
              source={require('_assets/images/Logo.png')}
            />
            <Text style={style.text}>Exquisite Dishes From Chef</Text>
            <TouchableOpacity>
              <View style={style.container}>
                <Text style={style.buttonText}> Book A Table </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openModel}>
              <View style={style.container}>
                <Text style={style.buttonText}> Order Online </Text>
              </View>
            </TouchableOpacity>
          </View>
          <SavedAddressModal
            onPress={onRequestClose}
            isAddress={isAddress}
            Isblur={Isblur}
            OnRequestCalOpen={OnRequestCalOpen}
            OnRequestDelNavigate={OnRequestDelNavigate}
          />
          <CalendarModal
            oncloseCalender={oncloseCalender}
            isModelOpen={isModelOpen}
            IsBlur={IsClanderblur}
            OnRequestDelNavigate={OnRequestDelNavigate}
          />
        </ImageBackground>
      </View>
    </>
  );
}
