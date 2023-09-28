/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import Slider from '../components/Slider';
import CustomButton from '../components/CustomButton';

const OnBoarding = ({navigation}) => {
  return (
    <View style={[styles.onboarding01, styles.appbartopLayout]}>
      <Slider />
      <View style={styles.threeDotContinuer}>
        <View style={styles.threeDot}>
          <View style={styles.onboarding01Item} />
          <View style={[styles.rectangleViewLayout]} />
          <View style={[styles.rectangleViewLayout]} />
        </View>
      </View>
      <View style={styles.buttonCenter}>
        <CustomButton
          ButtonTxt={'Get Started'}
          event={() => {
            console.log('Button pressed');
            navigation.navigate('home');
          }}
        />
        <Text style={styles.alreadyHaveAnContainer}>
          <Text>Already Have An Acount?</Text>
          <Text style={styles.logIn1Typo}>Log In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbartopLayout: {
    width: '100%',
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    paddingTop: '10%',
  },
  buttonCenter: {
    alignItems: 'center',
    paddingBottom: '20%',
  },
  onboarding01: {
    height: '100%',
  },
  logIn1Typo: {
    fontFamily: FontFamily.signikaSemiBold,
    fontWeight: '600',
    color: Color.darkseagreen,
  },
  rectangleViewLayout: {
    height: 8,
    width: 12,
    backgroundColor: Color.pink,
    borderRadius: Border.br_base,
  },
  threeDotContinuer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  threeDot: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  onboarding01Child: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.darkseagreen,
    width: 290,
    height: 72,
    marginBottom: 10,
  },
  getStarted: {
    letterSpacing: 1.3,
    color: Color.bordersBackgroundsWhiteBackground,
    marginTop: 15,
    textAlign: 'center',
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.signikaSemiBold,
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.size_mid,
  },
  onboarding01Item: {
    backgroundColor: Color.salmon_200,
    width: 20,
    height: 10,
    borderRadius: Border.br_base,
  },
});

export default OnBoarding;
