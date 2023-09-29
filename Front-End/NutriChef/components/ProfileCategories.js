/* eslint-disable prettier/prettier */
import {Alert, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontSize} from '../GlobalStyles';

const ProfileCategories = ({image, txt, isCard, navigation}) => {
  const handleNavigation = () => {
    if (isCard === 'ProfileInfo') {
      navigation.navigate('ProfileInfoScreen');
    } else if (isCard === 'RenewPlans') {
      console.log('notProfileInfo');
    } else if (isCard === 'Setting') {
      console.log('notProfileInfo');
    } else if (isCard === 'Terms') {
      console.log('notProfileInfo');
    } else if (isCard === 'Logout') {
      Alert.alert('Logout', 'You Are Logout From NutiChef', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('LogIn')},
      ]);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => handleNavigation()}
      style={styles.mainView}>
      <Image source={image} />
      <Text style={styles.txt}>{txt}</Text>
      <Image
        style={styles.rightArrow}
        source={require('../assets/ArrowRightGray.png')}
      />
    </TouchableOpacity>
  );
};

export default ProfileCategories;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rightArrow: {
    width: 40,
    height: 40,
  },
  txt: {
    fontSize: FontSize.size_3xl,
    fontWeight: '700',
  },
});
