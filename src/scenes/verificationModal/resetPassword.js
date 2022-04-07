import React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
// import {TextBox} from '_components/atoms';
import {ModalButton} from '_components/atoms';
import {Typography, Colors, Mixins} from '_styles';
import phone from '../../assets/images/phone.png';

export default function ResetPassword({
  IsBlur,
  IsResetPassword,
  // onPress,
  onCancel,
  handelResetPassword,
  onChangeText,
  handelOpenFPassword,
}) {
  return (
    <View style={ModalStyles.mainView}>
      <Modal
        IsBlur={IsBlur}
        visible={IsResetPassword}
        animationType="slide"
        // onPress={onPress}
        transparent={true}>
        <View style={ModalStyles.content}>
          <Text style={ModalStyles.headingText}>Reset Your Password </Text>
          <Text style={ModalStyles.subheadText}>
            Please enter your registered phone to reset your password.
          </Text>
          <View>
            <Image
              source={phone}
              style={{
                height: 29,
                width: 29,
                position: 'absolute',
                left: 10,
                top: 20,
                tintColor: '#cacacf',
              }}
            />
            <TextInput
              placeholder="Phone"
              style={{
                borderWidth: 0.5,
                width: '100%',
                marginTop: 10,
                borderRadius: 10,
                paddingLeft: 40,
              }}
              onChangeText={onChangeText}
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <ModalButton
              text="Reset Password"
              //onPress={handelResetPassword}
              onpress={handelOpenFPassword}
            />
          </View>
          <TouchableOpacity onPress={onCancel}>
            <Text style={ModalStyles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  content: {
    // marginTop: Mixins.scaleSize(90),
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.padding(27),
    backgroundColor: 'white',
    marginHorizontal: Mixins.scaleSize(20),
    height: '60%',
    marginTop: '30%',
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(22),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  subheadText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    marginBottom: Mixins.scaleSize(10),
  },

  image: {
    ...Mixins.margin(25, 14),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(20.32),
  },
  cancelText: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
    marginTop: Mixins.scaleSize(10),
  },
});
