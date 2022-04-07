import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';
<<<<<<< HEAD

export default function SignIn() {
=======
export default function Closed() {
>>>>>>> sakshi_dev
  return (
    <View style={style.mainView}>
      <View>
        <Image
          style={style.logo}
          source={require('_assets/images/Logoo.png')}
        />
        <Text style={style.order}>Order</Text>
        <Text style={style.closed}>We're Closed</Text>
        <Text style={style.pickup}>You may select pickup instead.</Text>
        <Text style={style.line}>_____________________________________</Text>
        <TouchableOpacity>
          <Text style={style.delivery}>Go to Delivery</Text>
          <Text style={style.delLine}>_______</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
