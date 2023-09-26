/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Dimensions, Text} from 'react-native';

const DualButton = () => {
  // Get the screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Calculate dimensions based on screen size
  const boxWidth = screenWidth * 0.4; // 80% of screen width
  const boxHeight = screenHeight * 0.08; // 10% of screen height
  const rectangleWidth = boxWidth;
  const rectangleHeight = boxHeight;

  return (
    <View style={styles.main}>
      <Text style={{fontSize: 24, fontWeight: 700}}>Favorites</Text>
      <View style={styles.box}>
        <View
          style={[
            styles.rectangle,
            {width: rectangleWidth, height: rectangleHeight},
          ]}>
          <Text style={styles.boxText}>Food</Text>
        </View>
        <View
          style={[
            styles.rectangleSecond,
            {width: rectangleWidth, height: rectangleHeight},
          ]}>
          <Text style={styles.boxText}>Recipes</Text>
        </View>
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
    backgroundColor: '#ff9385',
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleSecond: {
    marginTop: 30,
    backgroundColor: '#fff8eb',
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
