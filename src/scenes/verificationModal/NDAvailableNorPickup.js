import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';
//import {BlurView} from '@react-native-community/blur';
export default function NoDeliveryAvailableNorPickup() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={ModalStyles.mainView}>
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
          <Image
            style={ModalStyles.image}
            source={require('_assets/images/map-locator.png')}
          />
          <Text style={ModalStyles.headingText}>No Delivery </Text>
          <Text style={ModalStyles.subheadText}>
            Sorry we're not delivering at this location .
          </Text>
          <Text>_____________________________________________</Text>
          <TouchableOpacity>
            <Text style={ModalStyles.endText}>Change Delivery Location</Text>
          </TouchableOpacity>
          <Text style={ModalStyles.line}>______ </Text>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text style={{fontSize: 50, justifyContent: 'center'}}>
          Click to open modal
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const ModalStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    color: Colors.WHITE,
    width: Mixins.scaleSize(332),
    height: Mixins.scaleSize(590),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Mixins.scaleSize(90),
    marginLeft: Mixins.scaleSize(21),
    borderWidth: 0.5,
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.padding(20),
    backgroundColor: 'white',
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(50),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
  subheadText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    textAlign: 'center',
  },
  image: {
    width: Mixins.scaleSize(50),
    height: Mixins.scaleSize(50),
    resizeMode: 'stretch',
  },
  endText: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(18),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
    marginTop: 10,
  },
  line: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
    marginTop: -15,
  },
});
