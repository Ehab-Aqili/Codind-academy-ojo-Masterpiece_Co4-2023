/* eslint-disable prettier/prettier */
import { Image, View } from 'react-native';
import React from 'react';

const NotFound = ({imageSrc}) => {
  return (
    <View>
      <Image source={imageSrc} />
    </View>
  );
};

export default NotFound;

