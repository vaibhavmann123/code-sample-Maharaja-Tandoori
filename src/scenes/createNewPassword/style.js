import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    height: Mixins.WINDOW_WIDTH,
  },
  logo: {
    width: Mixins.scaleSize(93),
    height: Mixins.scaleSize(93),
    justifyContent: 'center',
    alignItems: 'center',
    // ...Mixins.margin(0, 141, 0, 156),
  },
  logoText: {
    textAlign: 'center',
    fontSize: Mixins.scaleFont(26),
    // ...Mixins.margin(0, 76, 56, 77),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    width: '100%',
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
});
