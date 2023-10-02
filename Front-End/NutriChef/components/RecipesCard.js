/* eslint-disable prettier/prettier */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontSize} from '../GlobalStyles';
import axios from 'axios';

import {useLoginContext} from '../context/loginContext';
const RecipesCard = ({
  kcalNum,
  recipeName,
  recipeCategories,
  recipeImage,
  recipeId,
  navigation,
  screenName,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const cardWidth = screenWidth * 0.85;
  const cardHeight = screenHeight * 0.17;
  const [isSaved, setIsSaved] = useState(false);

  const handelNavigation = () => {
    navigation.navigate('RecipesScreen', {
      recipeName,
      recipeCategories,
      recipeImage,
      recipeId,
      kcalNum,
    });
  };

  const {user, token} = useLoginContext();
  
  const handleSavePress = async () => {
    try {
      if (isSaved) {
        // Remove from favorites
        const response = await axios.patch(
          'https://master-piece.onrender.com/api/user/remove-favorite',
          {userId: user.userId, recipeId: recipeId},
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        );
        console.log(response);
      }
     
      else {
        // Add to favorites
        const response = await axios.patch(
          'https://master-piece.onrender.com/api/user/add-favorite',
          {userId: user.userId, recipeId: recipeId},
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        );
        console.log(response);
      }
      // Toggle the save state
      setIsSaved(!isSaved);
    } catch (err) {
      console.error(err);
    }
  };
  if (screenName === 1) {
    imageSource = require('../assets/Heart.png');
  } 
  return (
    <View style={[styles.container, {width: cardWidth, height: cardHeight}]}>
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => handelNavigation()}>
        <Image source={{uri: recipeImage}} style={styles.recipeImage} />
        <View style={styles.cardText}>
          <Text style={styles.kcal}>{kcalNum} Kcal</Text>
          <Text style={styles.RecipeName}>{recipeName}</Text>
          <Text style={styles.categories}>{recipeCategories}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSavePress}>
        <Image
          style={styles.heart}
          source={
            isSaved
              ? require('../assets/Heart.png') 
              : require('../assets/HeartLight.png') 
          }
        />
      </TouchableOpacity>
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
    right: 10,
  },
  recipeImage: {
    width: 100,
    height: 115,
    borderRadius: 20,
  },
});
