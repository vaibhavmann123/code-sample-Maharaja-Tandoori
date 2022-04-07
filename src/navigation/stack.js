import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import signIn from '_scenes/signIn';
import signUp from '_scenes/signUp';
import signupNext from '_scenes/signupNext';
import mainScreen from '_scenes/mainScreen';
import deliveryNow from '_scenes/deliveryNow';
import pickupNow from '_scenes/pickupNow';
import deliveryLater from '_scenes/deliveryLater';
import pickupLater from '_scenes/pickupLater';
import comboMenu from '../scenes/comboMenu/menuAdded';
import nonVegmenu from '../scenes/nonVegmenu/index';
import chickenMenu from '../scenes/chickenMenu/index';
import cart from '../scenes/cart/cart';
import CreateNewPassword from '_scenes/createNewPassword';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Mainstack() {
  return (
    <Stack.Navigator
      initialScreen={mainScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="signupNext" component={signupNext} />
      <Stack.Screen name="mainScreen" component={mainScreen} />
      <Stack.Screen name="createNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="deliveryLater" component={deliveryLater} />
      <Stack.Screen name="deliveryNow" component={deliveryNow} />
      <Stack.Screen name="pickupLater" component={pickupLater} />
      <Stack.Screen name="pickupNow" component={pickupNow} />
      <Stack.Screen name="comboMenu" component={comboMenu} />
      <Stack.Screen name="nonVegmenu" component={nonVegmenu} />
      <Stack.Screen name="chickenMenu" component={chickenMenu} />
      <Stack.Screen name="cart" component={cart} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="mainScreen" component={mainScreen} />
      <Drawer.Screen name="cart" component={cart} />
    </Drawer.Navigator>
  );
}
