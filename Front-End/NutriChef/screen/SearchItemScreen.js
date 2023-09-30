import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipesCard from './../components/RecipesCard';
import { Color } from '../GlobalStyles';
import SearchInput from '../components/SearchInput';

const SearchItemScreen = ({recipeData}) => {
  const data = recipeData;
  return (
    <View>
      <View style={styles.mainContainer}>
       
        <RecipesCard
          kcalNum={data.recipe_calories}
          recipeName={data.recipe_name}
          recipeCategories={data.recipe_Categories}
          recipeImage={data.recipe_image}
        />
      </View>
    </View>
  );
};

export default SearchItemScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 150,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});
