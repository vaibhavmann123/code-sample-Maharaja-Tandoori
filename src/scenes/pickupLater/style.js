import {StyleSheet} from 'react-native'
import {Typography, Spacing, Colors, Mixins} from '_styles'

export default style=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.WHITE,
        width: Mixins.WINDOW_WIDTH,
        height: Mixins.deviceHeight,
       
    },
    headerView:{
        flexDirection:'row',
        ...Mixins.margin(12,23,0,23),
    },
    logo:{
        width: Mixins.scaleSize(59),
        height: Mixins.scaleSize(59),
        
    },
    text:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(20),
        ...Mixins.margin(12,16,119),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        
    },
    textboxView:{
        ...Mixins.margin(27,0,0,0),
    },
    textLogo:{
        ...Mixins.padding(10),
        ...Mixins.margin(10),
        width: Mixins.scaleSize(29),
        height: Mixins.scaleSize(29),

    },
    
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Mixins.scaleSize(31),
      },
    Section: {
        flexDirection: 'row',
        backgroundColor:Colors.WHITE,
        borderWidth: .5,
        borderColor: Colors.BLACK_BORDER,
        borderRadius: Mixins.scaleSize(10),
        width: Mixins.scaleSize(327),
        height: Mixins.scaleSize(104),
    },
    containerButton: {
        backgroundColor: Colors.ORANGE,
        borderRadius: Mixins.scaleSize(30),
        width: Mixins.scaleSize(327),
        height: Mixins.scaleSize(56),
        ...Mixins.margin(0,0, 19,0),
        alignSelf:'center'
      },
      buttonText: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_21,
        textAlign: 'center',
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        marginVertical: Mixins.scaleSize(14),
      },

})