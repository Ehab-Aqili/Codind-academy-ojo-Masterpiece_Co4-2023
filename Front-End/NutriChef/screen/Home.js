/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color, FontFamily} from '../GlobalStyles';
import ScrollWithDot from '../components/ScrollWithDot';

const Home = () => {
  const CardData = [
    {
      id: 1,
      title: 'Card 1',
      content: `This is the content
of Card 1`,
      backgroundColor: 'red',
    },
    {
      id: 2,
      title: 'Card 2',
      content: `This is the content
of Card 1`,
      backgroundColor: 'blue',
    },
    {
      id: 3,
      title: 'Card 3',
      content: `This is the content
of Card 1`,
      backgroundColor: 'green',
    },
    // Add more card data with different background colors
  ];
  const data = [
    {
      id: 1,
      img: require('../assets/fruits.png'),
      bgColor: '#fff2f0',
    },
    {
      id: 2,
      img: require('../assets/Vegetables.png'),
      bgColor: '#eff7ee',
    },
    {
      id: 3,
      img: require('../assets/Snacks.png'),
      bgColor: '#fff8eb',
    },
  ];
  return (
    <View style={styles.mainView}>
      <View style={styles.helloTxt}>
        <Text style={styles.greenText}>Hello UserName,</Text>
        <Text style={styles.normalText}>Find, track and eat healthy food.</Text>
      </View>
      <View style={styles.cardHome}>
        <ScrollWithDot data={CardData} />
      </View>

      <View style={styles.trackCard}>
        <View>
          <Text style={styles.trackArt}>
            {`Track Your 
Weekly Progress.`}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.trackBtn}>
            <Text style={styles.trackTextBtn}>View Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fatherChoose}>
        <Text style={styles.chooseFavTxt}>Choose Your Favorites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map(card => (
            <TouchableOpacity
              style={[styles.card, {backgroundColor: card.bgColor}]}
              key={card.id}>
              <Image source={card.img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontFamily.signikaRegular,
  },
  helloTxt: {
    alignItems: 'center',
  },
  greenText: {
    color: Color.darkseagreen,
    fontSize: 28,
  },
  normalText: {
    fontSize: 20,
  },
  cardHome: {
    marginTop: 16,
    width: '80%',
    // paddingHorizontal: 40,
    // flexDirection: 'row',
  },
  articleTxt: {
    color: '#ff806e',
    paddingBottom: 5,
  },
  articleParagraph: {
    fontSize: 20,
    fontWeight: '900',
    // whiteSpace: 'pre',
    color: '#000',
  },
  artBtn: {
    marginTop: 15,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ff8473',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  trackCard: {
    marginTop: '7%',
    backgroundColor: '#9e9bc7',
    width: '80%',
    height: '12%',
    borderRadius: 32,
    flexDirection: 'row',
    padding: 20,
  },
  trackArt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 25,
  },
  trackBtn: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  trackTextBtn: {
    color: '#9e9bc7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseFavTxt: {
    fontSize: 26,
    fontWeight: '400',
    marginTop: '5%',
    color: '#000',
    padding: '3%',
  },
  fatherChoose: {
    width: '80%',
    textAlign: 'left',
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 32,
    margin: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
