import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Events} from '../../../screens/main';
import {HomeIcon, EventsIcon} from '../../../assets/svg/index';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 64,
          backgroundColor: '#FFFFFF',
          shadowColor: '#696969',
          shadowOffset: {width: 12, height: 12},
          shadowOpacity: 0.2,
          shadowRadius: 12,
          elevation: 12,
          borderTopWidth: 0,
          paddingBottom: 0,
        },
        tabBarActiveTintColor: '#F14D40',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          title: 'Events',
          headerShown: false,
          tabBarIcon: ({color}) => <EventsIcon fill={color} />,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
