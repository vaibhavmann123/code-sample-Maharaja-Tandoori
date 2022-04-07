import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Mixins} from '_styles';

export default function CheckoutButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Text style={styles.Text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(30),
    width: Mixins.scaleSize(280),
    height: Mixins.scaleSize(56),
    marginHorizontal: Mixins.scaleSize(45),
    marginVertical: Mixins.scaleSize(100),
  },
  Text: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(20),
    textAlign: 'center',
    marginVertical: Mixins.scaleSize(14),
  },
});
