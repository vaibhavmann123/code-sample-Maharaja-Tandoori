import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  active: {
    width: Mixins.scaleSize(168),
    height: Mixins.scaleSize(49),
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(10),
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY_BACKGROUND,
    borderRadius: Mixins.scaleSize(10),
    borderColor: Colors.GRAY_BORDER,
    borderWidth: Mixins.scaleSize(0.5),
    height: Mixins.scaleSize(49),
  },
  activeText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    ...Mixins.padding(10, 40, 10, 40),
  },
  normalText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GRAY_DARK,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    ...Mixins.padding(10, 40, 10, 40),
  },
  welcome: {
    textAlign: 'center',
    fontSize: Mixins.scaleFont(20),
    width: '100%',
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});
