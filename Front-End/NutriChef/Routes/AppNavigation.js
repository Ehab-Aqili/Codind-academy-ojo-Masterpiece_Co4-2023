/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screen/Splash';
import OnBoarding from '../screen/OnBoarding';
import TabBar from './TabBar';
import SignUp from '../screen/SignUpScreen';
import RecipesScreen from '../screen/RecipesScreen';

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
        <Stack.Screen
          name="home"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipesScreen"
          component={RecipesScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
