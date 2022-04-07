import React, {useState} from 'react';
import moment from 'moment';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ScrollView,
} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';
import {ModalButton} from '_atoms';
import {Calendar, LocaleConfig} from 'react-native-calendars';
export default function CalendarModal(
  {isModelOpen, IsBlur, oncloseCalender, OnRequestDelNavigate},
  props,
) {
  const [selectedValue, setSelectedValue] = useState('java');

  const currentDate = moment().format('YYYY-MM-DD');
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Jan',
      'Féb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Déc',
    ],
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fri', 'Sat'],
  };
  LocaleConfig.defaultLocale = 'fr';

  return (
    <View style={ModalStyles.mainView}>
      <Modal
        visible={isModelOpen}
        IsBlur={IsBlur}
        animationType="slide"
        transparent={true}>
        <View style={ModalStyles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={ModalStyles.headingText}> Pick a Date & Time</Text>
            <Text style={ModalStyles.subheadText}>
              Please select pickup date and time for your order
            </Text>
            <View>
              <Calendar
                style={{
                  backgroundColor: '#ffffff',
                }}
                markingType={'custom'}
                markedDates={{
                  [currentDate]: {
                    customStyles: {
                      container: {
                        backgroundColor: '#FF7121',
                      },
                      text: {
                        color: 'white',
                        fontWeight: 'bold',
                      },
                    },
                  },
                }}
                theme={{
                  backgroundColor: '#f7f7f7',
                  calendarBackground: '#f7f7f7',
                  monthTextColor: 'black',
                  arrowColor: 'white',
                }}
                current={currentDate}
                minDate={'2020-05-10'}
                maxDate={'2022-05-30'}
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                onDayLongPress={day => {
                  console.log('selected day', day);
                }}
                monthFormat={'yyyy MMM'}
                onMonthChange={month => {
                  console.log('month changed', month);
                }}
                hideArrows={false}
                renderArrow={direction => {
                  console.log('direction....', direction);
                  return (
                    <View
                      style={{
                        ...(direction !== 'left'
                          ? {marginRight: 50}
                          : {marginLeft: 50}),
                        height: 25,
                        width: 25,
                        borderRadius: 100,
                        backgroundColor: '#FF7121',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'white'}}>
                        {direction !== 'left' ? '>' : '<'}
                      </Text>
                    </View>
                  );
                }}
                hideExtraDays={true}
                disableMonthChange={false}
                firstDay={1}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableArrowLeft={false}
                disableArrowRight={false}
                renderHeader={date => {
                  return (
                    <View>
                      <Text style={{color: '#FF7121'}}>
                        {moment(date).format('MMM yyyy')}
                      </Text>
                    </View>
                  );
                }}
                enableSwipeMonths={true}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                width: '50%',
                borderColor: '#FF7121',
                borderRadius: 10,
                alignSelf: 'center',
                marginVertical: '10%',
              }}>
              <Picker
                selectedValue={selectedValue}
                style={{
                  alignItems: 'center',
                  color: '#FF7121',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="6:30 Am" value="1" />
                <Picker.Item label="7:00 Am" value="2" />
              </Picker>
            </View>
            <View style={{alignItems: 'center'}}>
              <ModalButton
                onPress={OnRequestDelNavigate}
                text="Apply Changes"
              />
              <TouchableOpacity
                style={{marginTop: '5%'}}
                onPress={oncloseCalender}>
                <Text style={ModalStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
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
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    color: Colors.WHITE,
    marginHorizontal: Mixins.scaleSize(21),
    borderColor: Colors.BLACK_BORDER,
    borderRadius: Mixins.scaleSize(30),
    ...Mixins.padding(25),
    backgroundColor: 'white',
    height: '95%',
    marginBottom: 20,
    marginTop: 20,
  },
  headingText: {
    color: Colors.NIGHT_RIDER,
    fontSize: Mixins.scaleFont(22),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'left',
    marginBottom: 20,
  },
  subheadText: {
    color: Colors.GRAY,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    marginBottom: 20,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    ...Mixins.padding(10),
    ...Mixins.margin(25, 14),
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(20.32),
  },
  cancelText: {
    color: Colors.ORANGE,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
  blurView: {
    height: '100%',
    width: '100%',
  },
});
