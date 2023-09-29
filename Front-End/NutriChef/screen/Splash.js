/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Color, FontSize, FontFamily} from '../GlobalStyles';

const Splash = () => {
  return (
    <View style={[styles.splash, styles.splashBg]}>
      <Image
        style={styles.kcalIcon}
        resizeMode="cover"
        source={require('../assets/WLogo.png')}
      />
      <Text style={[styles.zuamica]}>HEAB AQILI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashBg: {
    backgroundColor: Color.darkseagreen,
    width: '100%',
  },
  splash: {
    flex: 1,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zuamica: {
    top: '40%',
    fontSize: FontSize.size_6xl,
    fontWeight: '800',
    fontFamily: FontFamily.nunitoExtraBold,
    color: '#cfe7cb',
  },
  kcalIcon: {
    width: 200,
    height: 140,
    position: 'absolute',
  },
});

export default Splash;
