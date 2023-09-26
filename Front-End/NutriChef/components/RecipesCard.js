/* eslint-disable prettier/prettier */
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../GlobalStyles';

const RecipesCard = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const cardWidth = screenWidth * 0.85;
  const cardHeight = screenHeight * 0.17;
  return (
    <View style={[styles.container, {width: cardWidth, height: cardHeight}]}>
      <Image source={require('../assets/ResipeOne.png')} />
      <View style={{rowGap: 5}}>
        <Text style={styles.kcal}>231Kal</Text>
        <Text style={styles.RecipeName}>Chopped Spring Ramen</Text>
        <Text style={styles.categories}>Scallions & tomatoes</Text>
      </View>
      <Image style={styles.heart} source={require('../assets/Heart.png')} />
    </View>
  );
};

export default RecipesCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: Color.mintcream,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 30,
  },
  kcal: {
    color: Color.darkseagreen,
    fontSize: FontSize.size_sm,
  },
  RecipeName: {
    fontSize: FontSize.size_lg,
  },
  categories: {
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  heart: {
    marginBottom: 70,
    marginLeft: -50,
  },
});
