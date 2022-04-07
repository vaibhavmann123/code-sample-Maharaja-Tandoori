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
            
        },
        logo:{
            width: Mixins.scaleSize(59),
            height: Mixins.scaleSize(59),
            justifyContent:'flex-start',
            ...Mixins.margin(5,8,0,21)
        },
        text:{
            textAlign:'center',
            fontSize: Mixins.scaleFont(20),
            ...Mixins.margin(20,20,),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI
        },
        textView:{
            flexDirection:'row',
            ...Mixins.margin(0,52,0,52),
            textAlign:'center'
        },
        orangeText:{
            fontSize: Mixins.scaleFont(16),
            color:Colors.ORANGE,
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI
        },
        blackText:{
            fontSize: Mixins.scaleFont(16),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI
        },
        searchBox:{
            alignContent:'center',
            ...Mixins.margin(29,24,0,24),
        },
        menu:{
            width: Mixins.scaleSize(20),
            height: Mixins.scaleSize(28),
            ...Mixins.margin(18,28,18,28),
        },
        search:{
            width: Mixins.scaleSize(52),
            height: Mixins.scaleSize(56),
            borderRadius: Mixins.scaleSize(10),
        },
        combo:{
            fontSize: Mixins.scaleFont(20),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            ...Mixins.margin(0,0,0,28),
        },
        line:{
            color:Colors.GRAY_PLACEHOLDER_LIGHT,
            textAlign:'center',
            ...Mixins.margin(0,0,21.5,0)
        },
        line1:{
            color:Colors.GRAY_PLACEHOLDER_LIGHT,
            textAlign:'center',
        },
        content:{
            flexDirection:'row',
        },
        blank:{
            width: Mixins.scaleSize(66),
            height: Mixins.scaleSize(66),
            borderRadius: Mixins.scaleSize(10),
            borderColor: Colors.GRAY_IMAGE_BORDER,
            borderWidth: 1,
            ...Mixins.margin(0,27.5,36,18),
        },
        head:{
            fontSize: Mixins.scaleFont(16),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
        },
        subhead:{
            fontSize: Mixins.scaleFont(14),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.TAUPE_GRAY,
            ...Mixins.margin(0,0,0,0),
        },
        price:{
            fontSize: Mixins.scaleFont(20),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.ORANGE,
        },
        SymbolView:{
            backgroundColor: Colors.ORANGE,
            borderRadius: Mixins.scaleSize(10),
            width: Mixins.scaleSize(42),
            height: Mixins.scaleSize(42),
            justifyContent:'center',
            alignContent:'center',
            ...Mixins.margin(5,0,0,59),
        },
        insideSymbolText:{
            color: Colors.WHITE,
            fontSize:Mixins.scaleSize(23),
            textAlign:'center',
            fontWeight:Typography.FONT_WEIGHT_REGULAR,
            marginTop:-5,
        
        },
        container:{
            flex: 1
        },
        subTotal:{
            flexDirection:'row',
            backgroundColor:'#F3EFEF',
            height:Mixins.scaleSize(70), 
            borderTopLeftRadius: Mixins.scaleSize(20),
            borderTopRightRadius: Mixins.scaleSize(20),
            color:"#FF7121",
            position:'relative',
            borderColor: Colors.GRAY_IMAGE_BORDER,
            borderWidth: 1,
            
        },
        down:{
            height:Mixins.scaleSize(12.49), 
            width:Mixins.scaleSize(21.34),
            ...Mixins.margin(33,26.14,0,27.21) 
        },
        subText:{
            fontSize: Mixins.scaleFont(16),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.NIGHT_RIDER,
            ...Mixins.margin(27,19,0,0),
        },
        price1:{
            fontSize: Mixins.scaleFont(24),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.ORANGE,
            ...Mixins.margin(22,24.29,0,0),
        },
        continueButton:{
            backgroundColor: Colors.ORANGE,
            borderRadius: Mixins.scaleSize(10),
            width: Mixins.scaleSize(111),
            height: Mixins.scaleSize(42.4),
            justifyContent:'center',
            alignContent:'center',
            ...Mixins.margin(17,28.21,0,0),
    
        },
        insideSymbolText1:{
            color: Colors.WHITE,
            fontSize:Mixins.scaleSize(18),
            textAlign:'center',
            fontWeight:Typography.FONT_WEIGHT_REGULAR,
            marginTop:-5,
        
        },
        popContent:{
            flexDirection:'row',
            ...Mixins.margin(15,0,0,0),
        },
        popHead:{
            fontSize: Mixins.scaleFont(16),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            ...Mixins.margin(0,60,0,31.5),
        },
        popSubhead:{
            fontSize: Mixins.scaleFont(14),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.TAUPE_GRAY,
            ...Mixins.margin(0,0,7,31.5),
        },
        poprice:{
            fontSize: Mixins.scaleFont(20),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.ORANGE,
            ...Mixins.margin(0,19,0,0),
        },
        popButton:{
            backgroundColor: Colors.ORANGE,
            borderRadius: Mixins.scaleSize(10),
            width: Mixins.scaleSize(26),
            height: Mixins.scaleSize(26),
            justifyContent:'center',
            alignContent:'center',
            ...Mixins.margin(3,12,0,12),
        },
        clear:{
            fontSize: Mixins.scaleFont(16),
            color:Colors.ORANGE,
            ...Mixins.margin(0,0,0,31.5)
        },
        popDown:{
            height:Mixins.scaleSize(12.49), 
            width:Mixins.scaleSize(21.34),
            ...Mixins.margin(15,154.43,0,27.21) 
        },
        popSub:{
            fontSize: Mixins.scaleFont(16),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.NIGHT_RIDER,
            ...Mixins.margin(10.74,19,0,0),
        },
        $110:{
            fontSize: Mixins.scaleFont(18),
            fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
            color:Colors.ORANGE,
            ...Mixins.margin(10,24.29,0,0),
        },
    
    })