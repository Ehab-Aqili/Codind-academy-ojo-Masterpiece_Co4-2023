/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SearchCard = ({imageUrl, title}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 10,
    width: 200,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SearchCard;
