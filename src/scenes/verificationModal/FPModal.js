import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBoxS, ModalButton } from '../../components/atoms';
import { Typography, Colors, Mixins } from '_styles';
import { BlurView } from '@react-native-community/blur';

export default function FPasswordModal({ FPVisible, isBlur, onClick }) {
  const [toggle, setToggle] = useState(true);
  const toggleFunc = () => {
    setToggle(!toggle);
  };
  return (
    <View style={ModalStyles.mainView}>
      {isBlur && (
        <BlurView
          style={ModalStyles.blurView}
          blurType="dark"
          blurAmount={30}
          reducedTransparencyFallbackColor="black"
        // onRequestClose={onRequestClose}
        />
      )}

      <Modal
        visible={FPVisible}
        isBlur={isBlur}
        animationType="slide"
        transparent={true}>
        <View style={ModalStyles.content}>
          <Text style={ModalStyles.verificationText}>Verification</Text>
          <Text style={ModalStyles.otpText}>
            Enter the OTP code recieved on your registered phone.
          </Text>
          <View style={ModalStyles.textBox}>
            <TextBoxS />
            <TextBoxS />
            <TextBoxS />
            <TextBoxS />
            <TextBoxS />
          </View>
          <ModalButton onPress={onClick} text="Verify" />
          <TouchableOpacity onPress={() => toggleFunc()}>
            <Text style={ModalStyles.toggleText}>
              {toggle ? (
                'Resend OTP'
              ) : (
                <Text style={{ color: Colors.NIGHT_RIDER }}>Resent</Text>
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  mainView: {
    // flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(374),
    justifyContent: 'space-evenly',
    marginTop: Mixins.scaleSize(90),
    marginLeft: Mixins.scaleSize(21),
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.padding(22, 22, 22, 22),
    backgroundColor: 'white',
  },
  blurView: {
    ...Mixins.margin(0),
    position: 'absolute',
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
  },
  verificationText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'left',
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  otpText: {
    //marginBottom: Mixins.scaleSize(5),
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(16),
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlign: 'left',
  },
  toggleText: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(16),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
});
