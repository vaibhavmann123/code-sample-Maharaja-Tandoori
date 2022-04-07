import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.Text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

// export function ModalButton({text, onPress}) {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.container}>
//         <Text style={styles.Text}> {text} </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(30),
    width: Mixins.scaleSize(280),
    height: Mixins.scaleSize(56),
    marginLeft: 5,
  },
  Text: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_21,
    textAlign: 'center',
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginVertical: Mixins.scaleSize(14),
  },
});
