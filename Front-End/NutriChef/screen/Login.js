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
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import {useLoginContext} from '../context/loginContext';

const LogIn = ({navigation}) => {
  const {login} = useLoginContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      login(email, password);
    if(email && password !== undefined || null){
      navigation.navigate('home');
    }

      console.log('Logging in');
    }
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImg}
        resizeMode="contain"
        source={require('../assets/LineLogo.png')}
      />
      <Image source={require('../assets/ImageSliderTwo.png')} />
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
      <View style={styles.btnCustom}>
        <CustomButton ButtonTxt="Log In" event={handleLogin} />
      </View>
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
    fontFamily: FontFamily.poppinsRegular,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  btnCustom: {
    marginTop: 15,
  },
  logoImg: {
    width: '70%',
    height: '10%',
  },
});

export default LogIn;
