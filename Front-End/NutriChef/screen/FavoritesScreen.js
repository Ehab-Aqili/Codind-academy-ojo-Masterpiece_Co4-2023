/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import DualButton from '../components/DualButton';
import CardCategories from '../components/CardCategories';
import NotFound from '../components/NotFound';
import RecipesCard from '../components/RecipesCard';
import CustomButton from '../components/CustomButton';
import {Color} from '../GlobalStyles';
import {useLoginContext} from '../context/loginContext';
import axios from 'axios';

const data = [
  {
    id: 1,
    img: require('../assets/burger.png'),
    bgColor: '#fff8eb',
  },
  {
    id: 2,
    img: require('../assets/Candy.png'),
    bgColor: '#fff8eb',
  },
  {
    id: 3,
    img: require('../assets/Snacks.png'),
    bgColor: '#fff8eb',
  },
  {
    id: 4,
    img: require('../assets/Cockies.png'),
    bgColor: '#fff8eb',
  },
  {
    id: 5,
    img: require('../assets/MicecoFood.png'),
    bgColor: '#fff8eb',
  },
];

const recipesData = [
  {
    id: 1,
    kcalNum: 231,
    recipeName: 'Chopped Spring Ramen',
    recipeCategories: 'Scallions & tomatoes',
    recipeImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCGaX78AYv4mva5Yl1sobNYYM8xNbxrHZfaRuiqvzyDXDthjyWZuTeFP0Jc5UvnhBlWo&usqp=CAU',
  },
  {
    id: 2,
    kcalNum: 381,
    recipeName: 'Chicken Tandoori',
    recipeCategories: 'Chicken & Salad',
    recipeImage:
      'https://thewoksoflife.com/wp-content/uploads/2016/06/grilled-tandoori-chicken-11.jpg',
  },
];
const ImageFoodNotFound = require('../assets/FoodNotFound.png');
const ImageRecipesNotFound = require('../assets/ResipesNotFound.png'); // Corrected the typo in the image path

const FavoritesScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Food');
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const lastCardWidth = screenWidth * 0.25;
  const lastCardHeight = screenHeight * 0.13;
  const recipesCardHeight = screenHeight * 0.5;
  const {user, token} = useLoginContext();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    const getFavoriteRecipes = async () => {
      try {
        const response = await axios.get(
          `https://master-piece.onrender.com/api/user/get-favorite/${user.userId}/`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        );
        // console.log('favorite recipes', response.data.userFavorite);
        setFavoriteRecipes(response.data.userFavorite);
      } catch (error) {
        console.error('Error fetching favorite recipes:', error);
      }
    };

    getFavoriteRecipes();
  }, [favoriteRecipes]);

  return (
    <View style={styles.mainView}>
      <DualButton setActiveButton={setActiveTab} activeButton={activeTab} />
      {activeTab === 'Food' ? (
        data.length === 0 ? (
          <View style={[styles.notFoundContainer]}>
            <NotFound imageSrc={ImageFoodNotFound} />
            <CustomButton
              ButtonTxt={'Search Food'}
              event={() => {
                navigation.jumpTo('Search');
              }}
            />
          </View>
        ) : (
          <View style={styles.cardContainer}>
            {data.map((card, index) => (
              <CardCategories
                imageSrc={card.img}
                id={card.id}
                bgColor={card.bgColor}
                width={0.25}
                height={0.13}
                key={index}
              />
            ))}
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: '#fff8eb',
                  width: lastCardWidth,
                  height: lastCardHeight,
                },
              ]}>
              <Image source={require('../assets/PlusIcon.png')} />
            </TouchableOpacity>
          </View>
        )
      ) : favoriteRecipes.length !== 0 ? (
        <>
          <ScrollView
            style={[styles.recipesContainer, {height: recipesCardHeight}]}
            contentContainerStyle={styles.recipesContent}>
            {favoriteRecipes.map(item => (
              <RecipesCard
                navigation={navigation}
                recipeId={item._id}
                kcalNum={item.recipe_calories}
                recipeName={item.recipe_Name}
                recipeCategories={item.recipe_Categories}
                recipeImage={item.recipe_image}
                screenName={1}
              />
            ))}
          </ScrollView>
          <View style={styles.searchCenter}>
            <CustomButton
              ButtonTxt={'Search Recipes'}
              event={() => {
                navigation.jumpTo('Search');
              }}
            />
          </View>
        </>
      ) : (
        <View style={[styles.notFoundContainer]}>
          <NotFound imageSrc={ImageRecipesNotFound} />
          <CustomButton
            ButtonTxt={'Search Recipes'}
            event={() => {
              navigation.jumpTo('Search');
            }}
          />
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    height: '100%',
  },
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 32,
    margin: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundContainer: {
    marginTop: '30%',
    alignItems: 'center',
    rowGap: 120,
  },
  recipesContainer: {
    marginTop: 30,
  },
  searchCenter: {
    marginVertical: 30,
    alignItems: 'center',
  },

  recipesContent: {
    alignItems: 'center',
    rowGap: 20,
  },
});
