/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SearchCard = ({imageUrl, title}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '70%',
    height: '70%',
    objectFit :'cover',
    aspectRatio: 1,
    borderRadius: 8,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchCard;
