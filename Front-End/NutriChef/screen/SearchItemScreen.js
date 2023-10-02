import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipesCard from './../components/RecipesCard';
import {Color} from '../GlobalStyles';

const SearchItemScreen = ({recipeData}) => {
  const data = recipeData;
  return (
    <View style={styles.mainContainer}>
      <RecipesCard
        kcalNum={data.recipe_calories}
        recipeName={data.recipe_Name}
        recipeCategories={data.recipe_Categories}
        recipeImage={data.recipe_image}
      />
    </View>
  );
};

export default SearchItemScreen;

const styles = StyleSheet.create({
  SearchedCard: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});
