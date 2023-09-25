/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import SearchIcon from '../assets/SearchLight.png';
const SearchInput = ({placeholder, onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.inputContainer}>
      <Image source={SearchIcon} size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Search...'}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onEndEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 18,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default SearchInput;
