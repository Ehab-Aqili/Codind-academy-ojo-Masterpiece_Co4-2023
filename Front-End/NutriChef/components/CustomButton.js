/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

const CustomButton = ({event, ButtonTxt}) => {
  return (
    <View style={styles.onboarding01Child}>
      <Text style={[styles.getStarted]} onPress={event}>
        {ButtonTxt}
      </Text>
    </View>
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
