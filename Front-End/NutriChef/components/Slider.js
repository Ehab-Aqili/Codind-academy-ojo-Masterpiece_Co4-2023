/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const Slider = () => {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logoImg}
        resizeMode="contain"
        source={require('../assets/kcal1.png')}
      />
      <Image
        style={styles.sliderImg}
        resizeMode="contain"
        source={require('../assets/eating-healthy-foodcuate-1.png')}
      />
      <Text style={[styles.eatHealthy]}>Eat Healthy</Text>
      <Text style={[styles.maintainingGoodHealth, styles.timeFlexBox]}>
        Maintaining good health should be the primary focus of everyone.
      </Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  logoImg: {
    width: '30%',
    height: '30%',
  },
  sliderImg: {
    width: '100%',
    height: '100%',
  },
  eatHealthy: {
    fontFamily: FontFamily.signikaSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_6xl,
  },
  maintainingGoodHealth: {
    color: Color.gray_600,
    fontFamily: FontFamily.signikaRegular,
    fontSize: FontSize.size_mid,
    alignItems: 'center',
  },
});
