/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DateCard from '../components/DateCard';
import {Color, FontSize} from '../GlobalStyles';
import TotalInfo from '../components/TotalInfo';
import MealCard from '../components/MealCard';

const CaloriesScreen = ({navigation}) => {
  const img = require('../assets/burger.png');
  return (
    <View style={styles.mainView}>
      <DateCard />
      <TotalInfo calories={1234} protein={123} fat={123} carbs={123} />
      <View style={styles.MealHeader}>
        <Text style={styles.meals}>Meals</Text>
        <Text
          onPress={() => navigation.navigate('Meals')}
          style={styles.showMore}>
          Show More
        </Text>
      </View>
      <View>
        <MealCard txt={'Burger'} image={img} cal={132} />
      </View>
    </View>
  );
};

export default CaloriesScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  meals: {
    fontSize: FontSize.size_6xl,
    color: '#000',
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 10,
  },
  MealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  showMore: {
    color: Color.darkseagreen,
    fontSize: FontSize.size_mid,
  },
});
