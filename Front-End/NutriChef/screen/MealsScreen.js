/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MealCard from '../components/MealCard';
import {Color, FontSize} from '../GlobalStyles';

const MealsScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mealHeader}>Breakfast</Text>
      <MealCard
        txt={'Burger'}
        image={require('../assets/burger.png')}
        cal={132}
      />
      <Text style={styles.mealHeader}>Lunch</Text>
      <MealCard
        txt={'Burger'}
        image={require('../assets/burger.png')}
        cal={132}
      />
      <Text style={styles.mealHeader}>Dinner</Text>
      <MealCard
        txt={'Burger'}
        image={require('../assets/burger.png')}
        cal={132}
      />
      <Text style={styles.mealHeader}>Snack</Text>
      <MealCard
        txt={'Burger'}
        image={require('../assets/Snacks.png')}
        cal={132}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    height: '100%',
  },
  mealHeader: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
});
