/* eslint-disable prettier/prettier */
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DualButton from '../components/DualButton';
import CardCategories from '../components/CardCategories';
import NotFound from '../components/NotFound';

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
const ImageNotFound = require('../assets/FoodNotFound.png');

const FavoritesScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const lastCardWidth = screenWidth * 0.25;
  const lastCardHeight = screenHeight * 0.13;

  return (
    <View>
      <DualButton />
      {data.length === 0 ? (
        <View style={[styles.notFoundContainer]}>
          <NotFound imageSrc={ImageNotFound} />
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
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
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
  },
});
