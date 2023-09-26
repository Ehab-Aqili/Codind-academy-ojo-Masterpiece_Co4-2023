/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import SearchInput from '../components/SearchInput';
import SearchCard from '../components/SearchCard';
import TrendingSearch from '../components/TrendingSearch';

const SearchScreen = () => {
  const handleSearch = query => {
    // Implement your search logic here
    // You can use the 'query' parameter to perform the search
    // For example, you can make an API request to fetch search results
    // and update the UI accordingly.
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
    <View style={styles.mainContainer}>
      <SearchInput
        placeholder="Search recipes, articles, people..."
        onSearch={handleSearch}
      />
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
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
});
export default SearchScreen;
