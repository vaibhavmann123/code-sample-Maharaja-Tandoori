import React from 'react';
import {useState} from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import Button from '_components/atoms/modalButton';
<<<<<<< HEAD
import Button2 from '_components/atoms/modalBnC';
import {Typography, Colors, Mixins} from '_styles';
=======
import Button2 from '_components/atoms/modalButtonNoColor';
import {Typography, Spacing, Colors, Mixins} from '_styles';
>>>>>>> sakshi_dev
import {BlurView} from '@react-native-community/blur';

export default function MinOrder() {
  const [modalOpen, setModalOpen] = useState(false);
  const [blurView, setblurView] = useState(false);
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
        <View style={ModalStyles.content}>
          <View style={ModalStyles.headerStyle} />
          <View style={ModalStyles.headerContent}>
            <Text style={ModalStyles.headingText}>
              The minimum Delivery order for this restaurant is{' '}
              <Text style={ModalStyles.dollarText}>{'\u0024'}20</Text>
            </Text>
          </View>

          <View style={ModalStyles.content2}>
            <Text style={ModalStyles.totalText}>
              The total of your selected items
            </Text>
            <Text style={{position: 'relative', color: Colors.GRAY}}>
              ____________________________________________________
            </Text>
            <Text style={ModalStyles.dollarText}> {'\u0024'}15.99</Text>
            <Button text="Add More Items"></Button>
            <Button2 text="Charge me extra $4.01"></Button2>
            <Text style={ModalStyles.endText}>
              {' '}
              Calculate after every discound but before delivery fees if any
            </Text>
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
  content: {
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(409),
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.margin(80, 22, 132, 22),
    //...Mixins.padding(0,22,0,22),
    backgroundColor: 'white',
  },
  headerStyle: {
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
  headerContent: {
    ...Mixins.padding(22, 22, 0, 22),
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
  },
  content2: {
    flex: 3.8,
    justifyContent: 'space-between',
    //...Mixins.margin(140,0,120,0),
    ...Mixins.padding(0, 22, 35, 22),
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(24),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  totalText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(23),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    top: 15,
  },
  dollarText: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(30),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    position: 'relative',
  },
  endText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'center',
  },
});
