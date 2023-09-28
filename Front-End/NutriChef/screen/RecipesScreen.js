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

const RecipesScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Initialize with the actual number of likes

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

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/burger.png')} // Replace 'recipe_image_url' with the actual image URL
        style={styles.recipeImage}
      />
      {/* Like and Save Bar */}
      <View style={styles.buttonBar}>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={
                isLiked
                  ? require('../assets/fruits.png')
                  : require('../assets/Heart.png')
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likeCount}</Text>
          <TouchableOpacity
            onPress={() => {
              /* Handle Save button click */
            }}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </View>

      {/* Nutrition Information Bar */}
      <View style={styles.nutritionBar}>
        <Text>Calories: 300</Text>
        <Text>Carbs: 40g</Text>
        <Text>Fat: 10g</Text>
        <Text>Protein: 20g</Text>
        <View style={styles.divider} />
      </View>

      {/* Ingredients Bar */}
      <View style={styles.ingredientsBar}>
        <Text>Ingredients:</Text>
        <Text>- Ingredient 1</Text>
        <Text>- Ingredient 2</Text>
        <Text>- Ingredient 3</Text>
        {/* Add more ingredients as needed */}
        <View style={styles.divider} />
      </View>

      {/* Directions Bar */}
      <View style={styles.directionsBar}>
        <Text>Directions:</Text>
        <Text>1. Step 1</Text>
        <Text>2. Step 2</Text>
        <Text>3. Step 3</Text>
        {/* Add more steps as needed */}
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
    backgroundColor: 'white',
    padding: 10,
  },
  ingredientsBar: {
    backgroundColor: 'white',
    padding: 10,
  },
  directionsBar: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default RecipesScreen;
