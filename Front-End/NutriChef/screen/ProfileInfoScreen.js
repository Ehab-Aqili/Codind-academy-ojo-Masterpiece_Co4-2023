/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Color, FontSize} from '../GlobalStyles';
import CustomButton from '../components/CustomButton';
import {useLoginContext} from '../context/loginContext';
import axios from 'axios';
const ProfileInfoScreen = () => {
  const {user, token} = useLoginContext();
  const [image, setImage] = useState(null);
  const [name, setName] = useState(user.username);
  const [calories, setCalories] = useState(user.calories.toString());
  const [message, setMessage] = useState('');
  // const [birth, setBirth] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(user.date_birth);
  console.log(user);
  const updateUser = async () => {
    const response = await axios.patch(
      'https://master-piece.onrender.com/api/user/update-user',
      {
        id: user.userId,
        username: name,
        calories: parseFloat(calories),
        date_birth: dateOfBirth,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );
    // setMessage(response.data.message)
    Alert.alert(
      'Update',
      `   ${response.data.message},
   This process may take an hour to confirm.`,
      [{text: 'OK', onPress: () => console.log('Update is Done ')}],
    );
    console.log(response.data);
  };

  const resetPassword = () => {
    // Implement your password reset logic here
    console.log(`Reset password for ${name} with email ${email}`);
  };

  // const saveChanges = () => {
  //   console.log(`Save changes for ${name} with email ${email}`);
  // };
  const handleDateOfBirthChange = text => {
    const cleanedText = text.replace(/[^0-9]/g, '').slice(0, 8);
    const day = cleanedText.slice(0, 2);
    let month = cleanedText.slice(2, 4);
    let year = cleanedText.slice(4, 8);
    const minMonth = 1;
    const maxMonth = 12;
    if (month > maxMonth) {
      month = String(maxMonth);
    }
    const maxYear = 2007;
    if (year > maxYear) {
      year = String(maxYear);
    }
    const formattedDate = `${day}${day && month ? '/' : ''}${month}${
      (day || month) && year ? '/' : ''
    }${year}`;
    setDateOfBirth(formattedDate);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.UserImg} source={require('../assets/UserImg.jpg')} />
      <TouchableOpacity>
        <Image
          style={styles.upLoad}
          source={require('../assets/UploadImage.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Inter Your Daily Calories"
        value={calories}
        onChangeText={text => setCalories(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Date Of Birth (dd/mm/yyyy)"
        value={dateOfBirth}
        onChangeText={handleDateOfBirthChange}
        keyboardType="numeric"
      />
      <Text style={styles.resetPassMain}>
        Forget Your Password?
        <Text style={styles.resetPass} onPress={() => resetPassword()}>
          Reset Password
        </Text>
      </Text>
      <CustomButton ButtonTxt="Save Changes" event={updateUser} />
    </View>
  );
};
export default ProfileInfoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    padding: 20,
  },
  UserImg: {
    objectFit: 'contain',
    width: 220,
    height: 220,
    borderRadius: 50000,
  },
  upLoad: {
    width: 40,
    height: 40,
    zIndex: 1,
    bottom: 50,
    left: 75,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: '10%',
    padding: 10,
    fontSize: FontSize.size_mid,
    color: '#000',
  },
  resetPassMain: {
    fontSize: FontSize.size_mid,
    color: '#000',
    marginBottom: '15%',
  },
  resetPass: {
    color: Color.darkseagreen,
  },
});
