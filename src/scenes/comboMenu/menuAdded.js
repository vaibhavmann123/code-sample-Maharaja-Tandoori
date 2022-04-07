import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Colors, Mixins} from '_styles';
// import Header from '_molecules/header/menuHeader';
import {TextBox} from '_atoms';
import {SliderBox} from 'react-native-image-slider-box';
import RBSheet from 'react-native-raw-bottom-sheet';
//Style
import style from './style';
import {FoodToppings} from '../verificationModal';
import {menuRequested} from './action';
import {specifyDishRequested} from '../../redux/foodToppings/action';
import {baseURL} from '../../services/apiCalls';

export default function Menuadded(props) {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menuItem);
  const specifyDishObject = useSelector(state => state.specifyDish);

  //state
  const [isBlur, setIsblur] = useState(false),
    [isVisible, setIsVisible] = useState(false);

  //banner image array
  const bannerImg = menuItems.menuItem?.banners?.map((item, i) => {
    return 'http://3.23.245.115/maharaja-hotel/public/' + item.banner_image;
  });
  console.log('bannerImg', bannerImg);

  console.log('specifyDish', specifyDishObject.specifyDish);
  const specifyDishItem = specifyDishObject.specifyDish.menuItem;
  const attributers = specifyDishObject?.specifyDish.attributers;
  const refRBSheet = useRef();
  useEffect(() => {
    fetchMenuItemsByUrl();
  }, [props.route.params.item]);

  //menu urls
  const fetchMenuItemsByUrl = () => {
    const menuUrl = props.route.params.item;
    dispatch(menuRequested(menuUrl));
  };

  //group category

  function groupByKey(array, key) {
    return array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});
  }
  var res = groupByKey(menuItems.menuItem.menuItems || [], 'cat_name');

  /// specifyDish popUp and send params
  function specifyDish(menu_item_id, store_id) {
    setIsblur(true), setIsVisible(true);
    const specifyDishURL = `${baseURL}/item/getMenuItemAttributes?menu_item_id=${menu_item_id}&store_id=${store_id}&target=#itemAttributeMOdal&toggle=modal`;
    dispatch(specifyDishRequested(specifyDishURL));
  }
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
          {console.log('ssss', menuItems.menuItem?.store?.store_id)}
        </View>
        <View style={style.searchBox}>
          <TextBox
            image={require('_assets/images/menu.png')}
            secondIcon={require('_assets/images/search.png')}
            text={'Search Within Menu'}
          />
        </View>

        <View style={style.container}>
          <SliderBox
            images={bannerImg || []}
            sliderBoxHeight={Mixins.scaleSize(183)}
            sliderBoxWidth={Mixins.scaleSize(325)}
            dotColor="#FF7121"
            inactiveDotColor="#111111"
            autoplay={true}
            circleLoop={true}
            dotStyle={{
              width: Mixins.scaleSize(12),
              height: Mixins.scaleSize(12),
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
              width: Mixins.scaleSize(327),
              height: Mixins.scaleSize(120),
              marginTop: 5,
              ...Mixins.margin(0, 25, 0, 25),
              borderColor: Colors.GRAY_IMAGE_BORDER,
              borderWidth: 1,
            }}
          />
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Object.keys(res) || []}
            keyExtractor={(item, index) => index}
            renderItem={(data, i) => {
              return (
                <View>
                  <Text>{data.item}</Text>
                </View>
              );
            }}></FlatList>

          <Text style={style.line}>
            ____________________________________________________
          </Text>
        </View>

        <FlatList
          data={menuItems.menuItem.menuItems || []}
          keyExtractor={(item, index) => String(index)}
          renderItem={data => {
            return (
              <View style={style.content}>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('_assets/images/blank.png')}
                    style={style.blank}
                  />
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={style.head}>{data.item.item_name}</Text>
                  <Text style={style.subhead}>Dinner Saver Pack</Text>
                  <Text style={style.price}>${data.item.item_price}</Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    flex: 0.1,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      specifyDish(
                        data.item.menu_item_id,
                        menuItems.menuItem?.store?.store_id,
                      )
                    }>
                    <View style={style.SymbolView}>
                      <Text style={style.insideSymbolText}> + </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}></FlatList>
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
      <FoodToppings
        blurView={isBlur}
        visible={isVisible}
        item_name={specifyDishItem?.item_name}
        item_price={specifyDishItem?.item_price}
        menuAttributes={specifyDishItem?.menuAttributes}
        attributers={attributers}
        menuItem={specifyDishItem}
      />
    </View>
  );
}
