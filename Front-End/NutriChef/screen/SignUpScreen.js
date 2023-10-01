/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {Color, FontSize} from '../GlobalStyles';
import {useAuthContext} from '../context/AuthContext';
import axios from 'axios';
const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [user, setUser] = useState();
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {signUp, user, token} = useAuthContext();

  const handleSignup = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with signup
    if (Object.keys(newErrors).length === 0) {
      signUp(username, email, password);
      navigation.navigate('home');
      // console.log('first');
      // console.log(token);
      // console.log(user);
      console.log(user.username);
      console.log("***********************************************")
      console.log(token)
    }
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Signup</Text> */}
      <Image source={require('../assets/SignUpImage.png')} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      {errors.username ? (
        <Text style={styles.error}>{errors.username}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {errors.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      {errors.confirmPassword ? (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      ) : null}
      {/* <Button title="Sign Up" onPress={handleSignup} /> */}
      <CustomButton ButtonTxt="Sign Up" event={handleSignup} />
    </View>
  );
};

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: window.height,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    maxWidth: 300,
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 35,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: FontSize.size_lg,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});

export default SignUp;
