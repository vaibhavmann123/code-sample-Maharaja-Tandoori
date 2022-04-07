import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import style from './style';
import {TextBox, SubmitButton} from '../../components/atoms';
import {Header} from '_molecules';

export default function SignUp(props) {
  const [fullName, setFullName] = useState(null),
    [email, setEmail] = useState(null),
    [phone, setPhone] = useState(false),
    [password, setPassword] = useState(false);

  //send field values
  const handelParams = () => {
    props.navigation.navigate('signupNext', {
      data: {fullName, email, phone, password},
    });
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header title={'Create Account'} Screen="signUp" {...props} />
      <ScrollView style={{marginBottom: '60%'}}>
        <View>
          <TextBox
            image={require('_assets/images/userName.png')}
            // style={style.textLogo}
            text="Full Name"
            onChangeText={t => setFullName(t)}
          />
          <TextBox
            image={require('_assets/images/mail.png')}
            // style={style.textLogo}
            text="Email Address"
            onChangeText={t => setEmail(t)}
          />

          <TextBox
            image={require('_assets/images/phone.png')}
            // style={style.textLogo}
            text="Phone"
            image1={require('_assets/images/eye.png')}
            style2={style.eye}
            onChangeText={t => setPhone(t)}
          />
        </View>

        <TextBox
          image={require('_assets/images/password.png')}
          // style={style.textLogo}
          text="Password"
          secondIcon={require('_assets/images/eye.png')}
          style2={style.eye}
          onChangeText={t => setPassword(t)}
        />
        <SubmitButton text="Next" onPress={handelParams} />
        <Text style={style.step}>Step 1 of 2</Text>
      </ScrollView>
    </View>
  );
}
