/* eslint-disable prettier/prettier */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../GlobalStyles';

const MealCard = ({image, txt, cal}) => {
  return (
    <TouchableOpacity style={styles.mainView}>
      <Image source={image} style={{width: 70, height: 70, borderRadius: 20}} />
      <View>
        <Text style={styles.txt}>{txt}</Text>
        <Text style={styles.cal}>{cal} Calories</Text>
      </View>
      <Image
        style={styles.rightArrow}
        source={require('../assets/ArrowRightGray.png')}
      />
    </TouchableOpacity>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: Color.mintcream,
    borderRadius: 20,
    marginBottom: 20,
  },
  rightArrow: {
    width: 40,
    height: 40,
  },
  txt: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    textAlign: 'center',
  },
  cal: {
    fontSize: FontSize.size_mid,
    textAlign: 'center',
  },
});
