/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';

const DualButton = ({activeButton, setActiveButton}) => {
  // Get the screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Calculate dimensions based on screen size
  const boxWidth = screenWidth * 0.4; // 80% of screen width
  const boxHeight = screenHeight * 0.08; // 10% of screen height

  // State to track the active button

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Favorites</Text>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => setActiveButton('Food')}
          style={[
            styles.rectangle,
            { width: boxWidth, backgroundColor: activeButton === 'Food' ? '#ff9385' : '#fff8eb', height: boxHeight },
          ]}
        >
          <Text style={[styles.boxText, { color: activeButton === 'Food' ? '#fff' : '#000' }]}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveButton('Recipes')}
          style={[
            styles.rectangleSecond,
            { width: boxWidth, backgroundColor: activeButton === 'Recipes' ? '#ff9385' : '#fff8eb', height: boxHeight },
          ]}
        >
          <Text style={[styles.boxText, { color: activeButton === 'Recipes' ? '#fff' : '#000' }]}>Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  main: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    marginTop: 30,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleSecond: {
    marginTop: 30,
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 20,
  },
};

export default DualButton;
