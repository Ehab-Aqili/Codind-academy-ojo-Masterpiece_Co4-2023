import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Splash from '../screen/Splash';
import {Image} from 'react-native';
import SearchScreen from '../screen/SearchScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SliderOnBoarding from '../components/SliderOnBoarding';
import CaloriesScreen from '../screen/CaloriesScreen';
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#91c788',
        tabBarStyle: {height: 80, paddingBottom: 10},
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
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Search.png')} />
            ) : (
              <Image source={require('../assets/SearchLight.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Calories"
        component={CaloriesScreen}
        options={{
          tabBarLabel: 'Calories',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Camera.png')} />
            ) : (
              <Image source={require('../assets/Camera.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/Heart.png')} />
            ) : (
              <Image source={require('../assets/HeartLight.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
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
