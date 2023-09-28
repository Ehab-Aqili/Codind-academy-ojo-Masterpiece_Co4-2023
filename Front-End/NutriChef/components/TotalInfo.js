/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../GlobalStyles';

const TotalInfo = ({calories, protein, fat, carbs}) => {
  return (
    <View style={styles.mainView}>
      <Image source={require('../assets/TotalCalories.png')} />
      <Text style={styles.totalCal}>{calories}</Text>
      <View style={styles.infoHandel}>
        <Image source={require('../assets/Carbs.png')} />
        <Image source={require('../assets/Protein.png')} />
        <Image source={require('../assets/Fat.png')} />
      </View>
      <View style={styles.infoCPF}>
        <Text style={styles.info}>{carbs}</Text>
        <Text style={styles.info}>{protein}</Text>
        <Text style={styles.info}>{fat}</Text>
      </View>
    </View>
  );
};

export default TotalInfo;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
  infoHandel: {
    flexDirection: 'row',
    columnGap: 50,
  },
  totalCal: {
    fontSize: FontSize.size_6xl,
    fontWeight: '900',
    zIndex: 1,
    top: -100,
    color: '#000',
  },
  infoCPF: {
    flexDirection: 'row',
    columnGap: 85,
  },
  info: {
    fontSize: FontSize.size_3xl,
    fontWeight: '700',
    zIndex: 1,
    top: -85,
    color: '#000',
  },
});
