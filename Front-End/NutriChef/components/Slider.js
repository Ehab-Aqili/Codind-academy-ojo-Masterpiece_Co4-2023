/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const Slider = ({image, title, txt, width}) => {
  return (
    <View style={[styles.mainView, {width: width}]}>
      <Image
        style={styles.logoImg}
        resizeMode="contain"
        source={require('../assets/kcal1.png')}
      />
      <Image style={styles.sliderImg} resizeMode="contain" source={image} />
      <Text style={[styles.eatHealthy]}>{title}</Text>
      <Text style={[styles.maintainingGoodHealth]}>{txt}</Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  mainView: {
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
    textAlign: 'center',
    marginTop: 5,
  },
});
