/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import SearchInput from '../components/SearchInput';
import SearchCard from '../components/SearchCard';

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
      imageUrl: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg',
      title: 'Product 1',
    },
    {
      id: 2,
      imageUrl: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/13503/bigstock-Health-food-selection-super-foods-fruits-veggies.jpg',
      title: 'Product 2',
    },
    // Add more products as needed
  ];

  return (
    <View style={styles.mainContainer}>
      <SearchInput
        placeholder="Search recipes, articles, people..."
        onSearch={handleSearch}
      />
      <Text style={styles.hotNow}>Hot Now</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'column' }}>
            <SearchCard imageUrl={item.imageUrl} title={item.title} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  hotNow: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '900',
    paddingLeft: 10,
  },
});
export default SearchScreen;
