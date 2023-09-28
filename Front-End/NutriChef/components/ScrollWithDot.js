/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native';

const ScrollWithDot = ({data}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Initialize with the first card as active

  const handleCardPress = (card, index) => {
    // Set the active card index when a card is pressed
    setActiveCardIndex(index);
    // console.log(`Pressed on ${card.title}`);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          // Calculate the active card based on scroll position
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const cardIndex = Math.round(contentOffsetX / 300); // 220 is the card width including margin
          setActiveCardIndex(cardIndex);
        }}>
        {data.map((card, index) => (
          //   <TouchableOpacity
          //     key={card.id}
          //     onPress={() => handleCardPress(card, index)}
          //     activeOpacity={0.7}>
          <View
            style={styles.cardHome}
            key={card.id}
            onPress={() => handleCardPress(card, index)}>
            <View>
              <Text style={styles.articleTxt}>{card.title}</Text>
              <Text style={styles.articleParagraph}>{card.content}</Text>
              <TouchableOpacity style={styles.artBtn}>
                <Text style={styles.buttonText}>Read Now</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image source={require('../assets/CardHome.png')} />
            </View>
          </View>
          //   </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 14,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  cardHome: {
    marginTop: 16,
    backgroundColor: '#fff7f0',
    borderRadius: 32,
    padding: 20,
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  articleTxt: {
    color: '#ff806e',
    paddingBottom: 5,
  },
  articleParagraph: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
  artBtn: {
    marginTop: 15,
    width: '80%',
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
});

export default ScrollWithDot;
