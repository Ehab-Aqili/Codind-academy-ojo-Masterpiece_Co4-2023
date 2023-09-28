import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileCategories = () => {
  return (
    <View style={styles.mainView}>
      <Image source={require('../assets/ProfileOne.png')} />
      <Text>Edit Profile</Text>
      <Image
        style={styles.rightArrow}
        source={require('../assets/ArrowRightGray.png')}
      />
    </View>
  );
};

export default ProfileCategories;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    // alignContent: 'space-between',
  },
  rightArrow: {
    width: 50,
    height: 50,
  },
});
