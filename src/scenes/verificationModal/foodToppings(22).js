import React from 'react';
import {useState} from 'react';
import {Text, View, Modal, StyleSheet, Image, ScrollView} from 'react-native';
import Button from '_components/atoms/modalButton.js';
import RadioButton from '_atoms/radioButtons.js';
import {Typography, Colors, Mixins} from '_styles';
import {BlurView} from '@react-native-community/blur';
const options = [
  {
    key: 'salad',
    text: 'Salad',
  },
  {
    key: 'others',
    text: 'Others',
  },
];

export default function FoodToppingsScreen() {
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
        text="open modal"
        onPress={() => {
          setblurView(!blurView);
          setModalOpen(true);
        }}
      />
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={ModalStyles.Content}>
          <View style={ModalStyles.headerColor} />
          <View style={ModalStyles.headerContent}>
            <Text style={ModalStyles.headingText}>Dinner Saver</Text>
            <Text style={ModalStyles.subheadingText}>Dinner Saver Pack</Text>
            <Text style={ModalStyles.headingText2}>{'\u0024'}40</Text>
          </View>
          <View style={ModalStyles.content2}>
            <Text style={ModalStyles.headingText}> Choice</Text>
            <Text style={{marginTop: 0, color: Colors.GRAY}}>
              {' '}
              _________________________________________________
            </Text>
            <View style={{...Mixins.margin(20, 0, 0, 10)}}>
              <RadioButton
                selectedOption={selectedOption}
                onSelect={onSelect}
                options={options}
              />
            </View>
            <Text style={ModalStyles.optionText}> Option</Text>
            <Text style={{marginTop: -1, color: Colors.GRAY}}>
              {' '}
              _________________________________________________
            </Text>
            <View style={ModalStyles.optionBox}>
              <View style={ModalStyles.insideActiveOptionBox}>
                <Image
                  source={require('_assets/images/checkboxColor.png')}
                  style={ModalStyles.optionLogo}
                />
                <Text style={ModalStyles.subOptionActiveText}>Papor</Text>
              </View>
            </View>
            <View style={ModalStyles.optionBox}>
              <View style={ModalStyles.insideOptionBox}>
                <Image
                  source={require('_assets/images/Untitled.png')}
                  style={ModalStyles.optionLogo}
                />
                <Text style={ModalStyles.subOptionText}>Other</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                ...Mixins.margin(133, 0, 20, 0),
              }}></View>
            <Button text="Add to Cart"></Button>
          </View>
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
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
  blurView: {
    ...Mixins.margin(0),
    position: 'absolute',
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
  Content: {
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(610),
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.margin(80, 22, 132, 22),
    //...Mixins.padding(0,22,0,22),
    backgroundColor: 'white',
  },
  headerContent: {
    ...Mixins.padding(0, 22, 22, 22),
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerColor: {
    ...Mixins.padding(22, 22, 0, 22),
    flex: 1,
    width: '100%',
    //backgroundColor:'#FCD8C7',
    backgroundColor: Colors.ORANGE,
    opacity: 0.32,
    borderWidth: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: Mixins.scaleSize(30),
    borderTopRightRadius: Mixins.scaleSize(30),
  },
  content2: {
    flex: 8,
    justifyContent: 'space-evenly',
    //...Mixins.margin(140,0,120,0),
    ...Mixins.padding(0, 22, 62, 22),
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(22),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginTop: 20,
  },
  headingText2: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(30),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'right',
    ...Mixins.margin(-45, 20, 50, 0),
  },
  optionText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(22),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  subheadingText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
  optionBox: {
    justifyContent: 'space-evenly',
    ...Mixins.margin(20, 0, 0, 10),
  },
  insideOptionBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 1.5,
    borderColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(6),
    width: Mixins.scaleSize(264),
    height: Mixins.scaleSize(33),
    marginTop: 10,
  },
  insideActiveOptionBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.ORANGE,
    borderWidth: 1.5,
    borderColor: Colors.ORANGE,
    borderRadius: Mixins.scaleSize(6),
    width: Mixins.scaleSize(264),
    height: Mixins.scaleSize(33),
    marginTop: 10,
  },
  subOptionActiveText: {
    color: 'white',
    fontSize: Mixins.scaleSize(18),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'left',
  },
  subOptionText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleSize(18),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'left',
  },
  optionLogo: {
    ...Mixins.padding(10),
    ...Mixins.margin(0, 10, 0, 10),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(20.32),
  },
});
