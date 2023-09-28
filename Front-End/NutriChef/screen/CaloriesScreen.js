/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DateCard from '../components/DateCard';
import {Color} from '../GlobalStyles';

const CaloriesScreen = () => {
  return (
    <View style={styles.mainView}>
      <DateCard />
    
    </View>
  );
};

export default CaloriesScreen;

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    height: '100%',
  },
});
