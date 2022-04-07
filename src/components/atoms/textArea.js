import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {Colors} from '../../styles';

export default function TextArea({
  multiline,
  numberOfLines,
  placeholder,
  image,
  onChangeText,
}) {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: '8%',
      }}>
      <View style={{width: '90%', marginBottom: '8%'}}>
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
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: Colors.NIGHT_RIDER,
            textAlign: 'left',
            paddingLeft: 50,
            textAlignVertical: 'top',
          }}
        />
      </View>
    </View>
  );
}
