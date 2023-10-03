import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Color, FontSize} from '../GlobalStyles';
import {useLoginContext} from '../context/loginContext';
import axios from 'axios';

const RecipesScreen = ({route}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Initialize with the actual number of likes
  const {
    recipeName,
    recipeCategories,
    recipeSteps,
    recipeDes,
    recipeId,
    recipeImage,
    kcalNum,
  } = route.params;
  const {user, token} = useLoginContext();
  // console.log(token);
  const handleLikePress = () => {
    if (isLiked) {
      // If already liked, decrease the like count by 1
      setLikeCount(likeCount - 1);
    } else {
      // If not liked, increase the like count by 1
      setLikeCount(likeCount + 1);
    }

    // Toggle the like state
    setIsLiked(!isLiked);
  };

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
      } else {
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

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: recipeImage}} // Replace 'recipe_image_url' with the actual image URL
        style={styles.recipeImage}
      />
      <Text style={styles.title}>{recipeName}</Text>
      <Text style={styles.subTitle}>{recipeCategories}</Text>
      <View style={[styles.nutritionBar, styles.divider]}></View>
      {/* Like and Save Bar */}
      <View style={styles.buttonBar}>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={
                isLiked
                  ? require('../assets/DarkLike.png')
                  : require('../assets/LightLike.png')
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likeCount}</Text>
          <TouchableOpacity onPress={handleSavePress}>
            <Image
              source={
                isSaved
                  ? require('../assets/Heart.png') // Dark version of the Save button
                  : require('../assets/HeartLight.png') // Light version of the Save button
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </View>

      {/* Nutrition Information Bar */}
      <Text style={styles.title}>Nutrition Information</Text>
      <View style={[styles.nutritionBar, styles.divider]}>
        <Text style={[styles.info, {backgroundColor: Color.darkseagreen}]}>
          Calories: {kcalNum}
        </Text>
        <Text style={[styles.info, {backgroundColor: Color.salmon_100}]}>
          Carbs: 40g
        </Text>
        <Text style={[styles.info, {backgroundColor: '#9e9bc7'}]}>
          Fat: 10g
        </Text>
        <Text style={[styles.info, {backgroundColor: '#ffab46'}]}>
          Protein: 20g
        </Text>
      </View>

      {/* Ingredients Bar */}
      <Text style={styles.title}>Ingredients:</Text>
      <View style={[styles.ingredientsBar, styles.divider]}>
        {recipeSteps.map((item, index) => (
          <Text key={index} style={styles.Item}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/FoodItemTwo.png')}
            />
            {item}
          </Text>
        ))}
        {/* Add more ingredients as needed */}
      </View>

      {/* Directions Bar */}
      <Text style={styles.title}>Directions:</Text>
      <View style={styles.directionsBar}>
        <Text style={styles.directionText}>{recipeDes}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  recipeImage: {
    width: '100%',
    height: 0.25 * Dimensions.get('window').height, // 25% of screen height
  },
  buttonBar: {
    backgroundColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Center the Like button and likeCount
    padding: 10,
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
  likeCount: {
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  nutritionBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    gap: 20,
  },
  ingredientsBar: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
  },
  directionsBar: {
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: FontSize.size_6xl,
    fontWeight: '900',
    padding: 10,
  },
  Item: {
    fontSize: FontSize.size_mid,
    fontWeight: '700',
    width: '90%',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: Color.whitesmoke,
    // justifyContent: 'center'
    // alignItems: 'center',
  },
  directionText: {
    paddingHorizontal: 20,
    fontSize: FontSize.size_mid,
  },
  info: {
    padding: 6,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  subTitle: {
    padding: 10,
    fontSize: FontSize.size_mid,
  },
});

export default RecipesScreen;
