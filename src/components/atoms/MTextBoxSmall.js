import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {Colors, Mixins} from '_styles';

export default function ModalTextBoxSmall({text, style}) {
  return (
    <View style={styles.container}>
      <View style={styles.Section}>
        <TextInput
          style={{flex: 1}}
          placeholder={text}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: Mixins.scaleSize(0.5),
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(48.56),
    height: Mixins.scaleSize(48.56),
  },
});
