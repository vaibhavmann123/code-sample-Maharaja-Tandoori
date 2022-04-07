import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text, View} from 'react-native';
import style from './style';
import {FPasswordModal} from '../verificationModal';
import {TextBox, SubmitButton} from '../../components/atoms';
import Header from '_molecules/header';
import {signupRequested} from './action';

export default function SignupNext(props) {
  const dispatch = useDispatch();
  console.log('signupProps', props.route.params.data);
  //STATE
  const [FPOpen, setFPOpen] = useState(false),
    [isBlur, setIsBlur] = useState(false),
    [dob, setDob] = useState(null),
    [gender, setGender] = useState(null);

  const handleVerify = () => {
    setFPOpen(!FPOpen);
    setIsBlur(!isBlur);
    props.navigation.navigate('mainScreen');
  };

  const handelSignupRequest = () => {
    const data = props.route.params.data;
    console.log('final', data);
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      dob: dob,
      // gender: gender,
      gender: 'M',
    };
    const onSuccess = data => {
      props.navigation.navigate('mainScreen');
    };
    const onFail = err => {
      Alert.alert('Something went wrong');
    };
    dispatch(signupRequested({data: payload, onSuccess, onFail}));
  };

  return (
    <View style={style.mainView}>
      <Header title={'Create Account'} Screen="signUp" {...props} />
      <View style={style.textboxView}>
        <TextBox
          image={require('_assets/images/calendar.png')}
          // style={style.textLogo}
          text="Date of Birth e.g yyyy-mm-d"
          onChangeText={t => setDob(t)}
        />
        <TextBox
          image={require('_assets/images/gender.png')}
          // style={style.textLogo}
          text="Gender"
          onChangeText={t => setGender(t)}
        />
      </View>
      <View>
        <SubmitButton onPress={handelSignupRequest} text="Sign Up" />
        {/* <SubmitButton
          onPress={() => props.navigation.navigate('mainScreen')}
          text="Sign Up"
        /> */}

        <Text style={style.step}>Step 2 of 2</Text>
      </View>
      <FPasswordModal
        onClick={handleVerify}
        FPVisible={FPOpen}
        isBlur={isBlur}
      />
    </View>
  );
}
