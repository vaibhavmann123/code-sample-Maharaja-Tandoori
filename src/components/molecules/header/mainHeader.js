import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default function MainHeader({title, navigation}) {
  return (
    <View style={style.headerView}>
      <Image style={style.logo} source={require('_assets/images/Logo.png')} />
      <Text style={style.text}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          tintColor="#FF7121"
          source={require('_assets/images/menuButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...Mixins.margin(10, 0, 70, 0),
  },
  logo: {
    width: Mixins.scaleSize(59),
    height: Mixins.scaleSize(59),
  },
  text: {
    textAlign: 'center',
    fontSize: Mixins.scaleFont(18),
    // ...Mixins.margin(12, 16, 80, 0),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});
