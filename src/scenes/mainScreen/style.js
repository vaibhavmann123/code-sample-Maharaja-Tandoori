import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  mainView: {
    // flex: 1,
    // height: '100%',
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: Mixins.scaleSize(105),
    height: Mixins.scaleSize(105),
  },
  text: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_48,
    width: Mixins.scaleSize(284),
    height: Mixins.scaleSize(186),
    ...Mixins.margin(0, 0, 19, 0),
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
  container: {
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(30),
    width: Mixins.scaleSize(280),
    height: Mixins.scaleSize(56),
    ...Mixins.margin(0, 0, 19, 0),
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_21,
    textAlign: 'center',
    // fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginVertical: Mixins.scaleSize(14),
  },
  blurView: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
});
