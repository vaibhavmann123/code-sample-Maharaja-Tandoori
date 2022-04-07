import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from '_components/atoms/modalButton.js';
import RadioButton from '_atoms/radioButtons.js';
import {Typography, Colors, Mixins} from '_styles';
import {BlurView} from '@react-native-community/blur';
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

export default function SelectFromMultipleStores() {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [blurView, setblurView] = useState(false);

  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  const onSubmit = () => {
    console.log(selectedOption);
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
      <Button
        text="Open Modal"
        onPress={() => {
          setblurView(!blurView);
          setModalOpen(true);
        }}
      />
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={ModalStyles.content}>
          <TouchableOpacity
            onPress={() => {
              setModalOpen(false);
            }}
            style={{position: 'absolute', top: 25, right: 25}}>
            <Image
              source={require('_assets/images/closeModal.png')}
              style={{height: 21, width: 21}}></Image>
          </TouchableOpacity>
          <Text style={ModalStyles.headingText}>Select Store</Text>
          <Text style={ModalStyles.subheadingText}>
            We are available in below stores. Select any of one of these.
          </Text>
          <RadioButton
            selectedOption={selectedOption}
            onSelect={onSelect}
            options={options}
          />
          <View style={{marginBottom: 50}}>
            <Button text="Continue"></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  mainView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(590),
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.margin(80, 22, 144, 22),
    ...Mixins.padding(0, 22, 66, 22),
    backgroundColor: 'white',
  },
  blurView: {
    ...Mixins.margin(0),
    position: 'absolute',
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(30),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'left',
    marginTop: 35,
  },
  subheadingText: {
    //marginBottom: Mixins.scaleSize(5),
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(22),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'left',
    marginTop: -30,
  },
});
