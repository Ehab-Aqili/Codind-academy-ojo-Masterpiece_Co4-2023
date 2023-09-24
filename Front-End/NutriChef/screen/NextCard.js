/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';

const MyComponent = () => {
  const data = [
    {key: 'item1', text: 'Component 1'},
    {key: 'item2', text: 'Component 2'},
    {key: 'item3', text: 'Component 3'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({item}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{item.text}</Text>
    </View>
  );

  const renderPaginationDot = index => (
    <TouchableOpacity
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: index === currentIndex ? 'blue' : 'gray',
        margin: 5,
      }}
      onPress={() => setCurrentIndex(index)}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const xOffset = event.nativeEvent.contentOffset.x;
          const index = Math.round(xOffset / window.width);
          setCurrentIndex(index);
        }}
        keyExtractor={item => item.key}
        initialScrollIndex={currentIndex}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((_, index) => renderPaginationDot(index))}
      </View>
      <Button title="Next" onPress={nextCard} />
    </View>
  );
};

export default MyComponent;
