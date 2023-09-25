/* eslint-disable prettier/prettier */
import { Image, View } from 'react-native';
import React from 'react';

const NotFound = () => {
  return (
    <View>
      <Image source={require('../assets/noFound.png')} />
    </View>
  );
};

export default NotFound;

