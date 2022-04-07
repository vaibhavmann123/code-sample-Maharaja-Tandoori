import React, { useState } from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ModalButton, RadioButton } from '_atoms';
import { Typography, Colors, Mixins } from '_styles';
import { BlurView } from '@react-native-community/blur';

const options = [
  {
    key: 'address_1',
    text: 'Abcd Lane, Near Xyz shopping mall Sydney,49 ',
  },
  {
    key: 'address_2',
    text: 'Xyz Lane, Near abc shopping mall Preston,46',
  },
  {
    key: 'address_3',
    text: 'qwerty Lane, Near Xyz shopping mall Preston,46',
  },
];
export default function SavedAddressModal({
  isAddress = false,
  // Isblur,
  onPress,
  OnRequestCalOpen,
  OnRequestDelNavigate,
}, props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };
  //console.log('props check', props)
  return (
    <View style={ModalStyles.mainView}>
      {/* {Isblur && (
        <BlurView
          style={ModalStyles.blurView}
          blurType="dark"
          blurAmount={30}
          reducedTransparencyFallbackColor="black"
        />
      )} */}
      <Modal
        visible={isAddress}
        // Isblur={Isblur}
        animationType="slide"
        transparent={true}>
        <View style={ModalStyles.content}>
          <TouchableOpacity
            hitSlop={{ top: 100, bottom: 0, left: 0, right: 200 }}
            onPress={onPress}
            style={{
              position: 'absolute',
              top: 25,
              right: 25,
            }}>
            <Image
              source={require('_assets/images/closeModal.png')}
              style={{ height: 20, width: 20 }}></Image>
          </TouchableOpacity>
          <Text style={ModalStyles.headingText}>Saved Address</Text>
          <Text style={ModalStyles.subheadingText}>
            Select any of the addresses below or add a new one.
          </Text>
          <RadioButton
            selectedOption={selectedOption}
            onSelect={onSelect}
            options={options}
          />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={OnRequestDelNavigate}>
              <View style={ModalStyles.plusView}>
                <Text style={ModalStyles.plusText}> + </Text>
              </View>
            </TouchableOpacity>
            <Text style={ModalStyles.bottomText}>Add New Address</Text>
            <ModalButton onPress={OnRequestCalOpen} text="Continue" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  mainView: {
    // backgroundColor: 'red',
    // height: '100%',
    // width: '100%',
  },
  content: {
    color: Colors.WHITE,
    height: '80%',
    // borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.margin(50, 22, 0, 22),
    ...Mixins.padding(0, 22, 0, 22),
    backgroundColor: 'white',
  },
  blurView: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
  bottomText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
    marginBottom: 20,
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'left',
    marginTop: 30,
  },
  subheadingText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(16),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'left',
    marginVertical: 10,
  },
  plusView: {
    backgroundColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleSize(18),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
