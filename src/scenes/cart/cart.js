import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import style from './style';
import {Mixins} from '_styles';

export default function Cart(props) {
  return (
    <View style={style.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.logoText}>Cart</Text>
        <Text style={style.orangeText}>Order Summary</Text>
        <Text style={style.line}>
          ___________________________________________________
        </Text>

        <View style={style.Content}>
          <View>
            <Text style={style.head}>Dinner Saver</Text>
            <Text style={style.subhead}>Dinner Saver Pack</Text>
          </View>
          <Text style={style.price}>$40</Text>
          <TouchableOpacity>
            <View style={style.Button}>
              <Text style={style.insideSymbolText}> - </Text>
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: Mixins.scaleFont(21)}}>1</Text>
          <TouchableOpacity>
            <View style={style.Button}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.Content}>
          <View>
            <Text style={style.head}>Family Pack</Text>
            <Text style={style.subhead}>The meal deal</Text>
          </View>
          <Text style={style.price}>$70</Text>
          <TouchableOpacity>
            <View style={style.Button}>
              <Text style={style.insideSymbolText}> - </Text>
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: Mixins.scaleFont(21)}}>1</Text>
          <TouchableOpacity>
            <View style={style.Button}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={style.orangeText}>
          Add Special Instructions For Kitchen
        </Text>
        <Text style={style.line}>
          ___________________________________________________
        </Text>

        <View style={style.row}>
          <Text style={style.head}>Tip Your Rider</Text>
          <TouchableOpacity>
            <View style={style.Button1}>
              <Text style={style.insideSymbolText1}> +1 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.Button1}>
              <Text style={style.insideSymbolText1}> +3 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.Button1}>
              <Text style={style.insideSymbolText1}> +5 </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={style.line}>
          ___________________________________________________
        </Text>

        <View style={style.rowItem}>
          <Text style={style.headContent}>Sub Total</Text>
          <Text style={style.greyPrice}>$110.49</Text>
        </View>

        <View style={style.rowItem}>
          <Text style={style.headContent}>Delivery</Text>
          <Text style={style.greyPrice}>$4.00</Text>
        </View>

        <View style={style.rowItem}>
          <Text style={style.headContent}>Extra Charges</Text>
          <Text style={style.greyPrice}>$4.01</Text>
        </View>

        <View style={style.rowItem}>
          <Text style={style.headContent}>Total</Text>
          <Text style={style.greyPrice}>$118.50</Text>
        </View>

        <Text style={style.line2}>
          ___________________________________________________
        </Text>

        <View style={style.rowItem}>
          <Text style={style.grandTotal}>Grand Total</Text>
          <Text style={style.grandPrice}>$118.50</Text>
        </View>

        <Text style={style.line2}>
          ___________________________________________________
        </Text>

        <Text style={style.orangeText}>Have Promo Code?</Text>
        <Text style={style.order}>Order Details</Text>
        <Text style={style.line2}>
          ___________________________________________________
        </Text>

        <Text style={style.headContent}>Deliver to</Text>
        <Text style={style.greyPrice}>Preston 3072</Text>

        <Text style={style.headContent}>When</Text>
        <Text style={style.greyPrice}>ASAP</Text>

        <Text style={style.headContent}>Minimun order for Preston 3027</Text>
        <Text style={style.greyPrice}>$20</Text>

        <Text style={style.greyPrice}> </Text>
        <Text style={style.greyPrice}> </Text>
      </ScrollView>

      <View
        style={{position: 'absolute', bottom: 0, justifyContent: 'flex-end'}}>
        <TouchableOpacity>
          <View style={style.Container}>
            <Text style={style.Text}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
