import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default function ButtonNoColour({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.Text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.ORANGE,
    borderWidth: 1.8,
    borderRadius: Mixins.scaleSize(30),
    width: Mixins.scaleSize(280),
    height: Mixins.scaleSize(56),
    marginLeft: 5,
  },
  Text: {
    color: Colors.ORANGE,
    fontSize: Typography.FONT_SIZE_21,
    textAlign: 'center',
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginVertical: Mixins.scaleSize(14),
  },
});
