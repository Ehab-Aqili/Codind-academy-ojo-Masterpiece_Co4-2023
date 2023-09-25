/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrendingSearch = ({linkText}) => {
  return (
    <View style={styles.linkMain}>
      <Text style={styles.trendingLink}>{linkText}</Text>
      <Image
        source={require('../assets/arrowRight.png')}
        style={styles.linkIcon}
      />
    </View>
  );
};

export default TrendingSearch;

const styles = StyleSheet.create({
  linkMain: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  trendingLink: {
    color: '#ff8473',
    fontSize: 20,
    paddingLeft: 10,
  },
  linkIcon: {
    width: 20,
    objectFit: 'cover',
    height: 20,
  },
});
