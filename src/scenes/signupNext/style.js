import {StyleSheet} from 'react-native'
import {Typography, Spacing, Colors, Mixins} from '_styles'

export default style=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.WHITE,
        width: Mixins.WINDOW_WIDTH,
        height: Mixins.deviceHeight,
    },
    logo:{
        width: Mixins.scaleSize(93),
        height: Mixins.scaleSize(93),
        justifyContent:'center',
        ...Mixins.margin(0,141,0,141)
    },
    welcome:{
        textAlign:'center',
        fontSize: Mixins.scaleFont(20),
        ...Mixins.margin(0,75,56,75),
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        
    },
    textboxView:{
        ...Mixins.margin(31,0,0,0),
    },
    forget:{
        color:Colors.ORANGE,
        textAlign:'right',
        fontSize: Typography.FONT_SIZE_16,
        ...Mixins.margin(0,24,24,0),
        fontWeight:Typography.FONT_WEIGHT_BOLD,
        
    },
    eye:{
        ...Mixins.margin(5),
        width: Mixins.scaleSize(23),
        height: Mixins.scaleSize(18),
        ...Mixins.margin(20,31,20,31),
    },
    textLogo:{
            ...Mixins.padding(10),
            ...Mixins.margin(25,14),
            width: Mixins.scaleSize(26),
            height: Mixins.scaleSize(20.32),

    },
    step:{
        color:Colors.SILVER,
        textAlign:'center',
        fontSize: Typography.FONT_SIZE_16,
        ...Mixins.margin(31,0,0,0),
    }
})