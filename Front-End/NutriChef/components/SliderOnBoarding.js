/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
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

const SliderOnBoarding = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollViewRef = useRef(null); // Reference to the ScrollView component

  const handleCardPress = (card, index) => {
    setActiveCardIndex(index);
    console.log(`Pressed on ${card.title}`);
  };

  const handleNextButton = () => {
    // Calculate the index of the next card
    const nextIndex = activeCardIndex + 1;
    if (nextIndex < data.length) {
      // Scroll to the next card
      scrollViewRef.current.scrollTo({x: nextIndex * 220, animated: true});
      setActiveCardIndex(nextIndex);
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const cardIndex = Math.round(contentOffsetX / 220);
          setActiveCardIndex(cardIndex);
        }}>
        {data.map((card, index) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, {backgroundColor: card.backgroundColor}]}
            onPress={() => handleCardPress(card, index)}
            activeOpacity={0.7}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text>{card.content}</Text>

            <TouchableOpacity style={styles.ellipsisButton}>
              {/* <MaterialIcons name="more-vert" size={24} color="black" /> */}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor:
                  index === activeCardIndex ? 'blue' : 'lightgray',
              },
            ]}
          />
        ))}
      </View>
      <Button
        title="Next"
        onPress={handleNextButton}
        disabled={activeCardIndex === data.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
    borderRadius: 8,
    margin: 10,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ellipsisButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default SliderOnBoarding;
