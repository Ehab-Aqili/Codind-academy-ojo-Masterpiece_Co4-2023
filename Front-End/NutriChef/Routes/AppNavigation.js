/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screen/OnBoarding';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screen/Splash';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Boarding"
          component={OnBoarding}
          options={{title: 'BOARDING'}}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="NextCard" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
