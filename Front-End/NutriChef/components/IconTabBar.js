/* eslint-disable prettier/prettier */
// LightTabBarIcon.js
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const LightTabBarIcon = ({focused, onPress}) => {
  const iconSource = focused
    ? require('./light_focused_icon.png')
    : require('./light_unfocused_icon.png');

  return (
    <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
      <Image source={iconSource} style={{width: 24, height: 24}} />
    </TouchableOpacity>
  );
};








export default LightTabBarIcon;
