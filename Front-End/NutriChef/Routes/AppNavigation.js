/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screen/Splash';
import TabBar from './TabBar';
import SignUp from '../screen/SignUpScreen';
import RecipesScreen from '../screen/RecipesScreen';
import SliderOnBoarding from '../components/SliderOnBoarding';
import LogIn from '../screen/LogIn';
import MealsScreen from '../screen/MealsScreen';
import ProfileInfoScreen from '../screen/ProfileInfoScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Boarding"
          component={SliderOnBoarding}
          //
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'SignUp', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{title: 'LogIn', headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="home"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipesScreen"
          component={RecipesScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={{title: 'Daily Meal', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          options={{title: 'ProfileInfoScreen', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
