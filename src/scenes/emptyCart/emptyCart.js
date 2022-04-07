import React from 'react';
import {Text, View, Stylesheet, Image, TouchableOpacity} from 'react-native';
import style from './style';


export default function SignIn() {
  return (
    <View style={style.mainView}>
      <View>
        <Image style={style.logo} source={require('_assets/images/Logoo.png')} />
        <Text style={style.cart}>Cart</Text>
        <Text style={style.closed}>Oh No!</Text>
        <Text style={style.empty}>Your cart is empty</Text>
        <Text style={style.line}>_____________________________________________</Text>
        <TouchableOpacity>
            <Text style={style.menu}>Go to Menu</Text>
            <Text style={style.menuLine}>_______</Text>
        </TouchableOpacity>
      </View>

       
    </View>
  );
}
