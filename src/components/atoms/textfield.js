import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {Colors, Mixins} from '_styles';

export default function TextField({image, text, image1, style, style2}) {
  return (
    <View style={styles.container}>
      <View style={styles.Section}>
        <Image source={image} style={style} />

        <TextInput
          style={{flex: 1}}
          placeholder={text}
          underlineColorAndroid="transparent"
        />
        <Image source={image1} style={style2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(31),
  },

  Section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(327),
    height: Mixins.scaleSize(56),
  },
});
