import {StyleSheet} from 'react-native'
import {Typography, Spacing, Colors, Mixins} from '_styles'

export default style=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.WHITE,
        height: Mixins.WINDOW_WIDTH,
        ...Mixins.padding(32),
    },
    logo:{
        width: Mixins.scaleSize(59),
        height: Mixins.scaleSize(59),
        justifyContent:'center',
        ...Mixins.margin(21,295,0,0)
    },
    cart:{
        position: 'absolute',
        textAlign:'center',
        fontSize: Mixins.scaleFont(20),
        ...Mixins.margin(40,0,0,150),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        color: Colors.NIGHT_RIDER,

    },
    closed:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(47),
        ...Mixins.margin(184,0,0,0),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        color: Colors.NIGHT_RIDER,
    },
    
    empty:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(14),
        ...Mixins.margin(0,46,0,47),
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        color: Colors.TAUPE_GRAY,
        
    },
    line:{
        textAlign:'center',
        ...Mixins.margin(10,38.5,0,37.5),
        color: Colors.GRAY_PLACEHOLDER_LIGHT,
    },
    menuLine:{

        ...Mixins.margin(30,150,0,156),
        color: Colors.ORANGE,
        position:'absolute',
    },
    menu:{
        ...Mixins.margin(17.5,120,0,136),
        color: Colors.ORANGE,
        fontSize: Mixins.scaleFont(16),
        fontWeight: Typography.FONT_WEIGHT_BOLD,

    },
    

})