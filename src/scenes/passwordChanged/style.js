import {StyleSheet} from 'react-native'
import {Typography, Spacing, Colors, Mixins} from '_styles'

export default style=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.WHITE,
        height: Mixins.WINDOW_WIDTH,
        ...Mixins.padding(16),
    },
    logo:{
        width: Mixins.scaleSize(93),
        height: Mixins.scaleSize(93),
        justifyContent:'center',
        ...Mixins.margin(0,141,0,141)
    },
    resetPassword:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(43),
        ...Mixins.margin(184,0,0,0),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        
    },
    mainText:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(20),
        ...Mixins.margin(0,76,0,77),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        
    },
    passwordText:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(14),
        ...Mixins.margin(0,40,0,41),
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        color: Colors.TAUPE_GRAY,
        
    },
    line:{
        textAlign:'center',
        ...Mixins.margin(0,38.5,0,37.5),
        color: Colors.GRAY_PLACEHOLDER_LIGHT,
    },
    signLine:{

        ...Mixins.margin(25,165,0,164),
        color: Colors.ORANGE,
        position:'absolute',
    },
    signIn:{
        ...Mixins.margin(17.5,141,0,140),
        color: Colors.ORANGE,
        fontSize: Mixins.scaleFont(16),
        fontWeight: Typography.FONT_WEIGHT_BOLD,

    },
    

})