import React, {useRef} from 'react';
import {Text, View, Stylesheet, Image, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import TextBox from '_atoms/textfield';
import Header from '_molecules/header/menuHeader';
//import ModalButton from '_components/atoms/modalButton1';
import {ScrollView} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import RBSheet from 'react-native-raw-bottom-sheet';
import style from './style';

export default function NonvegMenu(props) {
  const refRBSheet = useRef();

  const images = [
    require('_assets/images/sliding.png'),
    require('_assets/images/sliding.png'),
    require('_assets/images/sliding.png'),
    require('_assets/images/sliding.png'),
    require('_assets/images/sliding.png'),
  ];

  return (
    <View style={style.mainView}>
      <View style={style.headerView}>
        <Image style={style.logo} source={require('_assets/images/Logo.png')} />
        <Text style={style.text}>Build Your Order</Text>
      </View>
      <ScrollView>
        <View style={style.textView}>
          <Text style={style.orangeText}>Tue, 15 May </Text>
          <Text style={style.blackText}>from </Text>
          <Text style={style.orangeText}>Melbourne 3072 </Text>
        </View>
        <View style={style.searchBox}>
          <TextBox
            image={require('_assets/images/menu.png')}
            // style={style.menu}
            // text="Search Within Menu"
            image1={require('_assets/images/search.png')}
            style2={style.search}
          />
        </View>

        <View style={style.container}>
          <SliderBox
            images={images}
            sliderBoxHeight={Mixins.scaleSize(183)}
            sliderBoxWidth={Mixins.scaleSize(325)}
            dotColor="#FF7121"
            inactiveDotColor="#111111"
            dotStyle={{
              width: Mixins.scaleSize(14),
              height: Mixins.scaleSize(14),
              borderRadius: Mixins.scaleSize(10),
              marginHorizontal: Mixins.scaleSize(2),
            }}
            paginationBoxStyle={{
              position: 'relative',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              ...Mixins.margin(0, 0, 26, 0),
            }}
            ImageComponentStyle={{
              width: Mixins.scaleSize(325),
              height: Mixins.scaleSize(183),
              marginTop: 5,
              ...Mixins.margin(0, 25, 0, 25),
              borderColor: Colors.GRAY_IMAGE_BORDER,
              borderWidth: 1,
            }}
          />
        </View>

        <View>
          <Header Screen="nonVegmenu" {...props} />
          <Text style={style.line}>
            _____________________________________________________
          </Text>
        </View>

        <View style={style.content}>
          <Image
            source={require('_assets/images/blank.png')}
            style={style.blank}
          />
          <View>
            <Text style={style.head}>Dinner Saver</Text>
            <Text style={style.subhead}>Dinner Saver Pack</Text>
            <Text style={style.price}>$40</Text>
          </View>
          <TouchableOpacity>
            <View style={style.SymbolView}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.content}>
          <Image
            source={require('_assets/images/blank.png')}
            style={style.blank}
          />
          <View>
            <Text style={style.head}>Family Pack</Text>
            <Text style={style.subhead}>Dinner Saver Pack</Text>
            <Text style={style.price}>$70</Text>
          </View>
          <TouchableOpacity>
            <View style={style.SymbolView}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.content}>
          <Image
            source={require('_assets/images/blank.png')}
            style={style.blank}
          />
          <View>
            <Text style={style.head}>Curry Pack 2</Text>
            <Text style={style.subhead}>Tasty curry Pack 2</Text>
            <Text style={style.price}>$70</Text>
          </View>
          <TouchableOpacity>
            <View style={style.SymbolView}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.content}>
          <Image
            source={require('_assets/images/blank.png')}
            style={style.blank}
          />
          <View>
            <Text style={style.head}>Dinner Saver</Text>
            <Text style={style.subhead}>Dinner Saver Pack</Text>
            <Text style={style.price}>$40</Text>
          </View>
          <TouchableOpacity>
            <View style={style.SymbolView}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.content}>
          <Image
            source={require('_assets/images/blank.png')}
            style={style.blank}
          />
          <View>
            <Text style={style.head}>Family Pack</Text>
            <Text style={style.subhead}>Dinner Saver Pack</Text>
            <Text style={style.price}>$70</Text>
          </View>
          <TouchableOpacity>
            <View style={style.SymbolView}>
              <Text style={style.insideSymbolText}> + </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={style.subTotal}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <RBSheet
            style={style.popUp}
            ref={refRBSheet}
            closeOnDragDown={false}
            closeOnPressMask={true}
            height={Mixins.scaleSize(230)}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              container: {
                backgroundColor: '#F3EFEF',
                borderTopLeftRadius: Mixins.scaleSize(20),
                borderTopRightRadius: Mixins.scaleSize(20),
                position: 'relative',
                borderColor: Colors.GRAY_IMAGE_BORDER,
                borderWidth: Mixins.scaleSize(1),
              },
            }}>
            <View style={style.popContent}>
              <View>
                <Text style={style.popHead}>Dinner Saver</Text>
                <Text style={style.popSubhead}>Dinner Saver Pack</Text>
              </View>
              <Text style={style.poprice}>$40</Text>
              <TouchableOpacity>
                <View style={style.popButton}>
                  <Text style={style.insideSymbolText}> - </Text>
                </View>
              </TouchableOpacity>
              <Text style={{fontSize: Mixins.scaleFont(21)}}>1</Text>
              <TouchableOpacity>
                <View style={style.popButton}>
                  <Text style={style.insideSymbolText}> + </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={style.popContent}>
              <View>
                <Text style={style.popHead}>Family Pack</Text>
                <Text style={style.popSubhead}>The meal deal</Text>
              </View>
              <Text style={style.poprice}>$70</Text>
              <TouchableOpacity>
                <View style={style.popButton}>
                  <Text style={style.insideSymbolText}> - </Text>
                </View>
              </TouchableOpacity>
              <Text style={{fontSize: Mixins.scaleFont(21)}}>1</Text>
              <TouchableOpacity>
                <View style={style.popButton}>
                  <Text style={style.insideSymbolText}> + </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{...Mixins.margin(0, 0, 0, 0)}}>
              <Text style={style.clear}>Clear Cart</Text>
              <Text style={style.line1}>
                _________________________________________________
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('_assets/images/down.png')}
                  style={style.popDown}
                />
                <Text style={style.popSub}>Subtotal</Text>
                <Text style={style.$110}>$110</Text>
              </View>
            </View>
          </RBSheet>
          <Image
            source={require('_assets/images/down.png')}
            style={style.down}
          />
        </TouchableOpacity>
        <Text style={style.subText}>Subtotal</Text>
        <Text style={style.price1}>$110</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('cart')}>
          <View style={style.continueButton}>
            <Text style={style.insideSymbolText1}> Continue </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
