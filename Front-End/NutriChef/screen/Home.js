/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, FontFamily} from '../GlobalStyles';
import ScrollWithDot from '../components/ScrollWithDot';
import CardCategories from '../components/CardCategories';
import Loading from '../components/Loading';
import {useLoginContext} from '../context/loginContext';
const Home = () => {
  const {user} = useLoginContext();

  const [isLoading, setIsLoading] = useState(true);

  // console.log(user)
  // console.log(token)
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
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);
  if (isLoading) {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}>
        {/* <Text>Loading...</Text> */}
        <Loading />
      </View>
    );
  }
  // console.log("sFASFASDFASFASF",user);
  return (
    <View style={styles.mainView}>
      <View style={styles.helloTxt}>
        <Text style={styles.greenText}>Hello {user.username},</Text>
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
          {data.map((card, index) => (
            <CardCategories
              imageSrc={card.img}
              id={card.id}
              bgColor={card.bgColor}
              width={0.3}
              height={0.14}
              key={index}
            />
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
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
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
    width: '90%',
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
    width: '90%',
    height: '12%',
    borderRadius: 32,
    flexDirection: 'row',
    columnGap: 30,
    padding: 15,
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
    marginTop: 3,
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
    width: '90%',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
