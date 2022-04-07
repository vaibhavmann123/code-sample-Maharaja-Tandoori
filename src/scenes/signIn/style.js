import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  // textboxView: {
  //   flex: 0.7,
  // },
  forget: {
    color: Colors.ORANGE,
    textAlign: 'right',
    fontSize: Typography.FONT_SIZE_16,
    ...Mixins.margin(0, 24, 24, 0),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  eye: {
    ...Mixins.margin(5),
    width: Mixins.scaleSize(23),
    height: Mixins.scaleSize(18),
    ...Mixins.margin(20, 31, 20, 31),
  },
  textLogo: {
    ...Mixins.padding(10),
    ...Mixins.margin(25, 14),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(20.32),
  },
  blurView: {
    // ...Mixins.margin(0),
    // position: 'absolute',
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
});
