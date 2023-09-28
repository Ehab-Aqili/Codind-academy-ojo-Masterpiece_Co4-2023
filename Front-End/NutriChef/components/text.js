import React, { useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const text = () => {
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  const scrollToMiddle = () => {
    // Calculate the scroll position to center the item
    const scrollX = (screenWidth - 100) / 2; // Assuming each item has a width of 100
    scrollViewRef.current.scrollTo({ x: scrollX, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {/* Replace this with your list of items */}
        <TouchableOpacity onPress={scrollToMiddle}>
          <View style={styles.item}>
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToMiddle}>
          <View style={styles.item}>
            <Text>Item 2</Text>
          </View>
        </TouchableOpacity>
        {/* Add more items here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 100, // Adjust the item width as needed
    height: 100, // Adjust the item height as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
  },
});

export default text;
