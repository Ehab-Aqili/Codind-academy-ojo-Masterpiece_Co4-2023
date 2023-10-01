import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/SearchInput';
import SearchCard from '../components/SearchCard';
import TrendingSearch from '../components/TrendingSearch';
import {Color} from '../GlobalStyles';
import {useRecipeContext} from '../context/RecipeContext';
import SearchItemScreen from './SearchItemScreen';
import CustomButton from '../components/CustomButton';

const SearchScreen = () => {
  const {recipes, loading} = useRecipeContext();
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  console.log('search', recipes.recipes);
  const handleSearch = query => {
    const filteredRecipes = recipes.recipes.filter(recipe =>
      recipe.recipe_Name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filteredRecipes);
    setShowSearchResults(true);
  };

  const handleResetSearch = () => {
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const products = [
    {
      id: 1,
      imageUrl:
        'https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg',
      title: 'Product 1',
    },
    {
      id: 2,
      imageUrl:
        'https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg',
      title: 'Product 2',
    },
    {
      id: 3,
      imageUrl:
        'https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg',
      title: 'Product 3',
    },
  ];

  const link = [
    {
      id: 1,
      linkText: 'best vegetable recipes',
    },
    {
      id: 2,
      linkText: 'best vegetable recipes',
    },
    {
      id: 3,
      linkText: 'best vegetable recipes',
    },
    {
      id: 4,
      linkText: 'best vegetable recipes',
    },
  ];

  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: Color.bordersBackgroundsWhiteBackground},
      ]}>
      <SearchInput
        placeholder="Search recipes, articles, people..."
        onSearch={handleSearch}
      />

      {showSearchResults ? (
        <View style={styles.ifSearch}>
          <ScrollView>
            {searchResults.map(item => (
              <SearchItemScreen key={item._id} recipeData={item} />
            ))}
          </ScrollView>
          <CustomButton ButtonTxt={'Go Back'} event={handleResetSearch} />
        </View>
      ) : (
        <View>
          <Text style={styles.hotNow}>Hot Now</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}>
            {products.map(item => (
              <View style={styles.cardContainer} key={item.id}>
                <SearchCard imageUrl={item.imageUrl} title={item.title} />
              </View>
            ))}
          </ScrollView>
          <Text style={styles.hotNow}>Trending</Text>
          {link.map(item => (
            <TrendingSearch linkText={item.linkText} key={item.id} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  hotNow: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: '900',
    paddingLeft: 10,
  },
  scrollViewContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    marginRight: 10,
  },
  resetButton: {
    marginVertical: 10,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  ifSearch: {
    alignItems: 'center',
    height: '100%',
  },
});

export default SearchScreen;
