import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import ProfileCategories from '../components/ProfileCategories';

const PorfileScreen = () => {
  const data = [
    {
      id: 1,
      img: require('../assets/ProfileOne.png'),
      txt: 'Profile',
    },
    {
      id: 2,
      img: require('../assets/Stars.png'),
      txt: 'Renew Plans',
    },
    {
      id: 3,
      img: require('../assets/Setting.png'),
      txt: 'Setting',
    },
    {
      id: 4,
      img: require('../assets/Terms.png'),
      txt: 'Setting',
    },
    {
      id: 5,
      img: require('../assets/Logout.png'),
      txt: 'Setting',
    },
  ];
  return (
    <View style={styles.mainView}>
      <Image style={styles.UserImg} source={require('../assets/UserImg.jpg')} />
      <Text style={styles.UserName}>Ihab Aloqaily</Text>
      {data.map(item => (
        <ProfileCategories style={styles.profileCard} key={item.id} image={item.img} txt={item.txt} />
      ))}
    </View>
  );
};

export default PorfileScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontFamily.signikaRegular,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  UserImg: {
    objectFit: 'contain',
    width: 180,
    height: 180,
    borderRadius: 50000,
  },
  UserName: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  profileCard:{}
});
