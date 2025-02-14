import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../../../screens/auth';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
};
export default MainNavigator;
