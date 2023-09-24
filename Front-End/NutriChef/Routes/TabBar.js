/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
// TabBar.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Splash from '../screen/Splash';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#91c788',
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Home.png')} />
            ) : (
              <Image source={require('../assets/HomeLight.png')} />
            ),
        }}
      />

      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarLabel: 'Splash',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Search.png')} />
            ) : (
              <Image source={require('../assets/SearchLight.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeFour"
        component={Splash}
        options={{
          tabBarLabel: 'HomeFour',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Camera.png')} />
            ) : (
              <Image source={require('../assets/Camera.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeThree"
        component={Splash}
        options={{
          tabBarLabel: 'HomeThree',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Heart.png')} />
            ) : (
              <Image source={require('../assets/HeartLight.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeFive"
        component={Splash}
        options={{
          tabBarLabel: 'HomeThree',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Profile.png')} />
            ) : (
              <Image source={require('../assets/ProfileLight.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
