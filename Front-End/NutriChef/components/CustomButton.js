/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

const CustomButton = ({event, ButtonTxt}) => {
  return (
    <TouchableOpacity style={styles.onboarding01Child} onPress={event}>
      <Text style={[styles.getStarted]}>{ButtonTxt}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
});
