import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';
export default function RadioButtons({
  options,
  selectedOption,
  onSelect,
  menuAttributes,
}) {
  {
    console.log('itemmenuAttributes', menuAttributes);
  }

  return (
    <View>
      {options?.map(item => {
        return (
          <View style={styles.buttonView} key={item.key}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item);
              }}>
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )}
            </TouchableOpacity>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    alignItems: 'center',
    marginBottom: 25,
  },

  circle: {
    height: Mixins.scaleSize(25),
    width: Mixins.scaleSize(25),
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    ...Mixins.margin(0, 6, 0, 0),
  },

  checkedCircle: {
    width: Mixins.scaleSize(17),
    height: Mixins.scaleSize(17),
    borderRadius: 10,
    backgroundColor: Colors.ORANGE,
  },
  text: {
    color: '#313131',
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    fontSize: Mixins.scaleSize(16),
    textAlign: 'left',
    flexWrap: 'wrap',
    letterSpacing: 0.3,
    marginRight: 16,
  },
});
