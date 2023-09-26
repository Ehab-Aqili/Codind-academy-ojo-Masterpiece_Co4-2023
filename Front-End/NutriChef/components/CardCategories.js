/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CardCategories = ({imageSrc, id, bgColor ,width, height}) => {
   // Get the screen dimensions
   const screenWidth = Dimensions.get('window').width;
   const screenHeight = Dimensions.get('window').height;
 
   // Calculate dimensions based on screen size
   const boxWidth = screenWidth * width; // 80% of screen width
   const boxHeight = screenHeight * height; // 10% of screen height
   const rectangleWidth = boxWidth;
   const rectangleHeight = boxHeight;
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: bgColor, width: rectangleWidth, height: rectangleHeight}]}
      key={id}>
      <Image source={imageSrc} />
    </TouchableOpacity>
  );
};

export default CardCategories;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 32,
    margin: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
});
