import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../../../screens/auth';
import {Events, Home} from '../../../screens/main';
import BottomTab from '../bottomTab';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Events" component={Events} />
      <MainStack.Screen name="BottomTab" component={BottomTab} />
    </MainStack.Navigator>
  );
};
export default MainNavigator;
