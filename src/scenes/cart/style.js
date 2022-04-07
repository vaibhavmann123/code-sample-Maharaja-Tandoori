import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
    ...Mixins.padding(0,25,0,25)
  },
  logo:{
    alignSelf:'center'
  },
  logoText:{
    alignSelf:'center',
    fontSize: Typography.FONT_SIZE_20,
    ...Mixins.margin(3, 0, 10, 0),
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
  },
  orangeText:{
    ...Mixins.margin(10, 0, 0, 0),
    color: Colors.ORANGE,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
  },
  line:{
    color:Colors.GRAY_PLACEHOLDER_LIGHT,
    alignSelf:'center',
    ...Mixins.margin(0, 0,10, 0),
    
  },
  line2:{
    color:Colors.GRAY_PLACEHOLDER_LIGHT,
    alignSelf:'center',
    ...Mixins.margin(0, 0, 5, 0),
    
  },
  Content:{
    flexDirection:'row',
    ...Mixins.margin(15,0,0,0),
    justifyContent:'space-between'
  },
  head:{
    fontSize: Mixins.scaleFont(16),
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    ...Mixins.margin(0,68,0,0),
  },
  subhead:{
    fontSize: Mixins.scaleFont(14),
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    color:Colors.TAUPE_GRAY,
  },
  price:{
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    color:Colors.ORANGE,
  },
  insideSymbolText:{
    color: Colors.WHITE,
    fontSize:Mixins.scaleSize(23),
    textAlign:'center',
    fontWeight:Typography.FONT_WEIGHT_REGULAR,
    marginTop:-5,

  },
  Button:{
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(26),
    justifyContent:'center',
    alignContent:'center',
    ...Mixins.margin(3,12,0,12),
},
row:{
  flexDirection:'row'
},
insideSymbolText1:{
  color: Colors.WHITE,
  fontSize:Mixins.scaleSize(14),
  textAlign:'center',
  fontWeight:Typography.FONT_WEIGHT_REGULAR,
  marginTop:-5,

},
Button1:{
  backgroundColor: Colors.ORANGE,
  borderRadius: Mixins.scaleSize(10),
  width: Mixins.scaleSize(38),
  height: Mixins.scaleSize(28),
  justifyContent:'center',
  alignContent:'center',
  ...Mixins.margin(3,5,0,5),
},
rowItem:{
  flexDirection:'row',
  justifyContent:'space-between'
},
greyPrice:{
  fontSize: Mixins.scaleFont(16),
  fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
  color:Colors.TAUPE_GRAY,
  ...Mixins.margin(0,5,11,0)
  
},
headContent:{
  fontSize: Mixins.scaleFont(16),
  fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
},
grandPrice:{
  fontSize: Mixins.scaleFont(24),
  fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
  color:Colors.TAUPE_GRAY,
  ...Mixins.margin(0,5,0,0)
  
},
grandTotal:{
  fontSize: Mixins.scaleFont(24),
  fontWeight: Typography.FONT_WEIGHT_BOLD,
  color:Colors.ORANGE,
},
order:{
  ...Mixins.margin(34, 0, 0, 0),
  color: Colors.ORANGE,
  fontSize: Typography.FONT_SIZE_16,
  fontWeight: Typography.FONT_WEIGHT_ROBOTO,
},
Container: {
    backgroundColor: Colors.ORANGE,
    borderTopLeftRadius: Mixins.scaleSize(30),
    borderTopRightRadius: Mixins.scaleSize(30),
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.scaleSize(56),
  },
  Text: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_21,
    textAlign: 'center',
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginVertical: Mixins.scaleSize(14),
  },
})