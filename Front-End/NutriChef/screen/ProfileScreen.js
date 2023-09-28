import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import ProfileCategories from '../components/ProfileCategories';

const PorfileScreen = () => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.UserImg} source={require('../assets/UserImg.jpg')} />
      <Text style={styles.UserName}>Ihab Aloqaily</Text>
      <ProfileCategories />
    </View>
  );
};

export default PorfileScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontFamily.signikaRegular,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  UserImg: {
    objectFit: 'contain',
    width: 180,
    height: 180,
    borderRadius: 50000,
  },
  UserName: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
});
