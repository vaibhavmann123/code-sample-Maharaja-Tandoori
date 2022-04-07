import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default function Header(props) {
  return (
    <View>
      <View style={style.view}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('deliveryLater')}>
          {props.Screen === 'deliveryNow' ||
          props.Screen === 'deliveryLater' ? (
            <View style={style.active}>
              <Text style={style.activeText}> Delivery </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Delivery </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('pickupNow')}>
          {props.Screen === 'pickupNow' || props.Screen === 'pickupLater' ? (
            <View style={style.active}>
              <Text style={style.activeText}> Pick Up </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Pick Up </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  active: {
    width: Mixins.scaleSize(168),
    height: Mixins.scaleSize(49),
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(10),
  },

  view: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: Colors.GRAY_BACKGROUND,
    borderRadius: Mixins.scaleSize(10),
    borderColor: Colors.GRAY_BORDER,
    borderWidth: Mixins.scaleSize(1),
    height: Mixins.scaleSize(49),
  },
  activeText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    ...Mixins.padding(10, 40, 11, 40),
  },
  normalText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GRAY_DARK,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    ...Mixins.padding(10, 40, 10, 40),
  },
});
