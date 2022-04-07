import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default function Header(props) {
  return (
    <View>
      <View style={style.view}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('comboMenu')}>
            {props.Screen === 'comboMenu' ? (
              <View>
                <Text style={style.activeText}>Combo Meals</Text>
              </View>
            ) : (
              <View>
                <Text style={style.normalText}>Combo Meals</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('nonVegmenu')}>
            {props.Screen === 'nonVegmenu' ? (
              <View>
                <Text style={style.activeText}>Entrée - Non Vegeterian</Text>
              </View>
            ) : (
              <View>
                <Text style={style.normalText}>Entrée - Non Vegeterian</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('chickenMenu')}>
            {props.Screen === 'chickenMenu' ? (
              <View>
                <Text style={style.activeText}>Mains - Chicken</Text>
              </View>
            ) : (
              <View>
                <Text style={style.normalText}>Mains - Chicken</Text>
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  activeText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.NIGHT_RIDER,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    ...Mixins.padding(0, 56, 0, 20),
  },
  normalText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    ...Mixins.margin(0, 56, 0, 20),
  },
});
