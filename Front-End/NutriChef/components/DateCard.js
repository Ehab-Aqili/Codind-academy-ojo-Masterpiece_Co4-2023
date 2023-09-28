import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Color} from '../GlobalStyles';

const DateCard = () => {
  const currentDate = new Date();
  const defaultSelectedDate = currentDate.getDate().toString();
  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  // Generate an array of dates for the previous 2 days, current day, and next 4 days
  const dates = [];
  for (let i = -2; i < 5; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const month = date.toLocaleString('default', {month: 'short'});
    const day = date.getDate().toString();
    dates.push({date: date.toISOString(), month, day});
  }

  const handleDatePress = day => {
    setSelectedDate(day);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dates.map((dateData, index) => (
        <TouchableHighlight
          key={index}
          onPress={() => handleDatePress(dateData.day)}
          underlayColor="lightgray">
          <View>
            {selectedDate === dateData.day ? (
              <View style={styles.selectedCard}>
                <Text style={[styles.month, styles.selectedTxt]}>
                  {dateData.month}
                </Text>
                <Text style={[styles.day, styles.selectedTxt]}>
                  {dateData.day}
                </Text>
              </View>
            ) : (
              <View style={styles.card}>
                <Text style={styles.month}>{dateData.month}</Text>
                <Text style={styles.day}>{dateData.day}</Text>
              </View>
            )}
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 70,
    backgroundColor: Color.whitesmoke,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    borderRadius: 10,
  },
  selectedCard: {
    width: 60,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    borderRadius: 10,
    backgroundColor: Color.darkseagreen,
    marginTop: 50,
  },
  selectedTxt: {
    color: '#fff',
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 24,
  },
});

export default DateCard;