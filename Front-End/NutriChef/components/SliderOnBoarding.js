/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import OnBoarding from '../screen/OnBoarding';
import CustomButton from './CustomButton';
import Slider from './Slider';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const data = [
  {
    id: 1,
    image: require('../assets/ImageSliderOne.png'),
    title: 'Eat Healthy',
    txt: 'Maintaining good health should be the primary focus of everyone.',
  },
  {
    id: 2,
    image: require('../assets/ImageSliderTwo.png'),
    title: 'Healthy Recipes',
    txt: 'Browse thousands of healthy recipes from all over the world.',
  },
  {
    id: 3,
    image: require('../assets/ImageSliderThree.png'),
    title: 'Track Your Health',
    txt: 'With amazing inbuilt tools you can track your progress.',
  },
];

// const Boarding = [<OnBoarding />, <OnBoarding />, <OnBoarding />];

const SliderOnBoarding = ({navigation}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollViewRef = useRef(null); // Reference to the ScrollView component
  const screenWidth = Dimensions.get('window').width;

  const SliderWidth = screenWidth * 1; // 80% of screen width
  const handleCardPress = (card, index) => {
    setActiveCardIndex(index);
    console.log(`Pressed on ${card.title}`);
  };

  const handleNextButton = () => {
    // Calculate the index of the next card
    const nextIndex = activeCardIndex + 1;
    if (nextIndex < data.length) {
      // Scroll to the next card
      scrollViewRef.current.scrollTo({
        x: nextIndex * SliderWidth,
        animated: true,
      });
      setActiveCardIndex(nextIndex);
    }
    if (nextIndex === 3) {
      navigation.navigate('SignUp');
    }
  };
  const HandelNavigationLogIn = () => {
    navigation.navigate('home');
  };
  return (
    <View style={styles.mainView}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const cardIndex = Math.round(contentOffsetX / SliderWidth);
          setActiveCardIndex(cardIndex);
        }}>
        {data.map(card => (
          <Slider
            width={SliderWidth}
            key={card.id}
            image={card.image}
            title={card.title}
            txt={card.txt}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === activeCardIndex ? '#ff8473' : '#ffc0b8',
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.btnCenter}>
        <CustomButton
          ButtonTxt={'Get Started'}
          event={handleNextButton}
          disabled={activeCardIndex === data.length - 1}
        />
      </View>
      <View style={styles.alreadyCenter}>
        <Text style={styles.alreadyHaveAnContainer}>
          <Text>Already Have An Acount?</Text>
          <Text onPress={HandelNavigationLogIn} style={styles.logIn1Typo}>
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    height: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  btnCenter: {
    marginVertical: 20,
    alignItems: 'center',
  },
  centerSlider: {
    alignItems: 'center',
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.size_mid,
  },
  logIn1Typo: {
    fontFamily: FontFamily.signikaSemiBold,
    fontWeight: '600',
    color: Color.darkseagreen,
  },
  alreadyCenter: {
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default SliderOnBoarding;
