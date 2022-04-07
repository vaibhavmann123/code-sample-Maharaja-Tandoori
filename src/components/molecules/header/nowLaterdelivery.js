import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default function Header(props) {
  return (
    <View>
      <View style={style.view}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('deliveryNow')}>
          {props.Screen === 'deliveryNow' ? (
            <View>
              <Text style={style.activeText}> Now </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Now </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('deliveryLater')}>
          {props.Screen === 'deliveryLater' ? (
            <View>
              <Text style={style.activeText}> Later </Text>
            </View>
          ) : (
            <View>
              <Text style={style.normalText}> Later </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  activeText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.ORANGE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    ...Mixins.padding(27, 40, 0, 40),
  },
  normalText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GRAY_DARK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    ...Mixins.padding(27, 40, 10, 40),
  },
});
