import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {Colors, Mixins} from '_styles';
import {padding} from '../../styles/mixins';

export default function TextBoxLarge({image, onChangeText, text, secondIcon}) {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: '8%',
      }}>
      <View style={{width: '90%'}}>
        <Image
          source={image}
          style={{
            height: 29,
            width: 29,
            position: 'absolute',
            left: 10,
            top: 10,
            tintColor: '#cacacf',
          }}
        />
        <Image
          source={secondIcon}
          style={{
            height: 18,
            width: 23,
            position: 'absolute',
            right: 10,
            top: 15,
            tintColor: '#cacacf',
          }}
        />
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: Colors.NIGHT_RIDER,
            paddingLeft: 50,
          }}
          placeholder={text}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   alignItems: 'center',
  //   ...padding(30, 30, 0, 30),
  // },
  // Section: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: Colors.WHITE,
  //   borderWidth: 0.5,
  //   borderColor: Colors.NIGHT_RIDER,
  //   borderRadius: Mixins.scaleSize(10),
  //   height: Mixins.scaleSize(48),
  // },
});
