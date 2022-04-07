import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {ModalButton} from '_components/atoms/';
import {useDispatch} from 'react-redux';
import {Typography, Colors, Mixins} from '_styles';
import {BlurView} from '@react-native-community/blur';
import {addToCartRequested} from '../cart/action';

export default function FoodToppings({
  visible,
  blurView,
  item_name,
  item_price,
  menuAttributes,
  attributers,
  menuItem,
}) {
  const [selectedOption, setSelectedOption] = React.useState({});
  const [attrb, setAttrb] = React.useState([]);
  const dispatch = useDispatch();
  // Set the initial count state to zero, 1
  const [count, setCount] = useState(1);
  const [item_attr_id, setItem_attr_id] = useState({});
  console.log('menuItemmenuItem', menuItem);
  console.log('menuAttributesArray', menuAttributes);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handelAddToCartRequest = () => {
    const payload = {
      quantity: count,
      item_attr_id: {},
      store_id: menuItem.store_id,
      menu_item_id: menuItem.menu_item_id,
      type: 'attribute',
      item_page: 'itemPage',
    };

    Object.keys(selectedOption).map((x, i) => {
      payload.item_attr_id['attr_' + i + ''] = [selectedOption[x]];
    });

    const onSuccess = data => {
      Alert.alert('Successful Added');
    };
    const onFail = err => {
      Alert.alert('Something went wrong');
    };
    dispatch(addToCartRequested({data: payload, onSuccess, onFail}));
  };

  const chooseMenuOptions = (menuId, menuItemId, selectOption) => {
    setSelectedOption(prevState => ({
      ...prevState,
      [menuId]:
        selectOption === 'single'
          ? menuItemId
          : prevState[menuId]
          ? prevState[menuId].find(x => x === menuItemId)
            ? prevState[menuId].filter(x => x !== menuItemId)
            : [...prevState[menuId], menuItemId]
          : [menuItemId],
    }));
  };

  return (
    <View style={ModalStyles.mainView}>
      {blurView && (
        <BlurView
          style={ModalStyles.blurView}
          blurType="dark"
          blurAmount={30}
          reducedTransparencyFallbackColor="black"
        />
      )}

      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={ModalStyles.Content}>
          <View style={ModalStyles.headerColor}>
            <View>
              {/* {console.log('menuAttributes', menuAttributes)}
              {console.log('attributers', attributers)} */}
              {console.log('selectedOption....', selectedOption)}
              <Text style={ModalStyles.headingText}>{item_name}</Text>
              <Text style={ModalStyles.subheadingText}>Dinner Saver Pack</Text>
            </View>
            <View>
              <Text style={ModalStyles.headingText2}>${item_price}</Text>
            </View>
          </View>
          <ScrollView>
            <View style={ModalStyles.content2}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={menuAttributes}
                keyExtractor={item => item.menu_attr_id}
                renderItem={(menuAttributesData, i) => {
                  return (
                    <View>
                      <Text style={ModalStyles.headingText}>
                        {menuAttributesData.item.attr_name}
                      </Text>
                      <Text style={{color: Colors.GRAY}}>
                        _________________________________________________
                      </Text>
                      {attributers.map((attributesData, i) => {
                        return (
                          <View>
                            {attributesData.map((item, i) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    chooseMenuOptions(
                                      item.menu_attr_id,
                                      item.item_attr_id,
                                      menuAttributesData.item.attr_selection,
                                    );
                                  }}
                                  key={i}>
                                  {menuAttributesData.item.menu_attr_id ===
                                    item.menu_attr_id &&
                                  menuAttributesData.item.attr_selection ===
                                    'multiple' ? (
                                    <View style={ModalStyles.optionBox}>
                                      <View style={ModalStyles.insideOptionBox}>
                                        {selectedOption?.[
                                          item.menu_attr_id
                                        ]?.find(
                                          x => x == item.item_attr_id,
                                        ) && (
                                          <Image
                                            style={ModalStyles.tickIcon}
                                            tintColor={'#FF7121'}
                                            source={require('../../assets/images/tick.png')}
                                          />
                                        )}

                                        <Text style={ModalStyles.subOptionText}>
                                          {item.attr_name}
                                        </Text>
                                      </View>
                                    </View>
                                  ) : menuAttributesData.item.menu_attr_id ===
                                      item.menu_attr_id &&
                                    menuAttributesData.item.attr_selection ===
                                      'single' ? (
                                    <>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          marginVertical: '2%',
                                        }}>
                                        <View style={ModalStyles.circle}>
                                          {selectedOption?.[
                                            item.menu_attr_id
                                          ] === item.item_attr_id && (
                                            <View
                                              style={[
                                                ModalStyles.checkedCircle,
                                              ]}
                                            />
                                          )}
                                        </View>
                                        <View>
                                          <Text>{item.attr_name}</Text>
                                        </View>
                                      </View>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  );
                }}></FlatList>
            </View>
            <View style={ModalStyles.btnMain}>
              <View style={ModalStyles.btnView}>
                <TouchableOpacity onPress={handleDecrement}>
                  <View style={ModalStyles.iconView}>
                    <Image
                      style={ModalStyles.icon}
                      tintColor={'white'}
                      source={require('../../assets/images/minus.png')}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={ModalStyles.count}>{count}</Text>
                <TouchableOpacity onPress={handleIncrement}>
                  <View style={ModalStyles.iconView}>
                    <Image
                      style={ModalStyles.icon}
                      tintColor={'white'}
                      source={require('../../assets/images/plus.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                ...Mixins.margin(20, 0, 20, 0),
              }}>
              <ModalButton
                onPress={() => handelAddToCartRequest()}
                text="Add to Cart"
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    ...Mixins.margin(0),
    position: 'absolute',
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
  Content: {
    flex: 1,
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(500),
    borderWidth: 0.5,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.margin(30, 22, 22, 22),
    backgroundColor: 'white',
    paddingBottom: 15,
    // borderColor: 'transparent',
  },
  headerContent: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  headerColor: {
    flexDirection: 'row',
    height: '14%',
    width: '100%',
    backgroundColor: '#FADBC9',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: Mixins.scaleSize(30),
    borderTopRightRadius: Mixins.scaleSize(30),
  },
  content2: {
    ...Mixins.padding(10, 22, 62, 22),
  },
  headingText: {
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: 'black',
  },
  headingText2: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(24),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'right',
  },
  optionText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  subheadingText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(14),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
  SymbolView: {
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(28),
    justifyContent: 'center',
    alignContent: 'center',
    ...Mixins.margin(0, 10, 0, 10),
  },
  insideSymbolText: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleSize(23),
    textAlign: 'center',
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginTop: -5,
  },
  optionBox: {
    // justifyContent: 'space-evenly',
    ...Mixins.margin(10, 0, 0, 10),
  },
  insideOptionBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(6),
    width: Mixins.scaleSize(264),
    height: Mixins.scaleSize(33),
    marginTop: 10,
    // backgroundColor: '#ff7121',
  },
  subOptionText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleSize(18),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    // textAlign: 'left',
    marginLeft: 20,
  },
  optionLogo: {
    ...Mixins.padding(10),
    ...Mixins.margin(0, 10, 0, 10),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(20.32),
  },

  btnMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconView: {
    backgroundColor: '#FF7121',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  count: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  tickIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
    // marginHorizontal: 10,
  },
  circle: {
    height: Mixins.scaleSize(25),
    width: Mixins.scaleSize(25),
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    ...Mixins.margin(0, 6, 0, 0),
  },
  checkedCircle: {
    width: Mixins.scaleSize(17),
    height: Mixins.scaleSize(17),
    borderRadius: 10,
    backgroundColor: Colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
