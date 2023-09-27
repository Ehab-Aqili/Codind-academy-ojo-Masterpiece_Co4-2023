/* eslint-disable prettier/prettier */
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../GlobalStyles';

const RecipesCard = ({kcalNum, recipeName, recipeCategories, recipeImage}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const cardWidth = screenWidth * 0.85;
  const cardHeight = screenHeight * 0.17;
  return (
    <View style={[styles.container, {width: cardWidth, height: cardHeight}]}>
      <Image source={recipeImage} />
      <View style={styles.cardText}>
        <Text style={styles.kcal}>{kcalNum} Kcal</Text>
        <Text style={styles.RecipeName}>{recipeName}</Text>
        <Text style={styles.categories}>{recipeCategories}</Text>
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
  cardText: {
    rowGap: 5,
    flexWrap: 'wrap',
  },
  kcal: {
    color: Color.darkseagreen,
    fontSize: FontSize.size_sm,
  },
  RecipeName: {
    flexWrap: 'wrap',
    width: 150,
    fontSize: FontSize.size_lg,
  },
  categories: {
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  heart: {
    marginBottom: 70,
  },
});