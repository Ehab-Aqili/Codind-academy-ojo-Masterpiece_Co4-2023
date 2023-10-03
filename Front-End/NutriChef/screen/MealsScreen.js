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
        txt={'Croissant'}
        image={require('../assets/Brackfastjpeg.jpeg')}
        cal={376}
      />
      <Text style={styles.mealHeader}>Lunch</Text>
      <MealCard
        txt={'Burger'}
        image={require('../assets/newIBurgerjpeg.jpeg')}
        cal={1172}
      />
      <Text style={styles.mealHeader}>Dinner</Text>
      <MealCard
        txt={'Beef Tacos'}
        image={require('../assets/Dinner.jpeg')}
        cal={863}
      />
      <Text style={styles.mealHeader}>Snack</Text>
      <MealCard
        txt={'Dray Fruits'}
        image={require('../assets/SnackMeal.jpeg')}
        cal={317}
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
