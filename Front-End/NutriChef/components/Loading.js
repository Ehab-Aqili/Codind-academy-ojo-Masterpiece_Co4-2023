import {View, StyleSheet, Animated, Easing} from 'react-native';
import React, {Component} from 'react';
import {Color} from '../GlobalStyles';

class Loading extends Component {
  constructor() {
    super();
    this.outerRotation = new Animated.Value(0);
    this.middleRotation = new Animated.Value(0);
    this.innerRotation = new Animated.Value(0);
  }

  componentDidMount() {
    this.startAnimation(this.outerRotation);
    this.startAnimation(this.middleRotation);
    this.startAnimation(this.innerRotation);
  }

  startAnimation = animatedValue => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.startAnimation(animatedValue));
  };

  render() {
    const outerRotation = this.outerRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const middleRotation = this.middleRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-360deg'],
    });

    const innerRotation = this.innerRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={styles.loader}>
        <Animated.View
          style={[styles.outer, {transform: [{rotate: outerRotation}]}]}
        />
        <Animated.View
          style={[styles.middle, {transform: [{rotate: middleRotation}]}]}
        />
        <Animated.View
          style={[styles.inner, {transform: [{rotate: innerRotation}]}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderColor: Color.darkseagreen,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
  },
  middle: {
    width: 50.4,
    height: 50.4,
    borderRadius: 25.2,
    borderColor: '#ff8473',
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
  },
  inner: {
    width: 19.2,
    height: 19.2,
    borderRadius: 9.6,
    borderColor: Color.darkseagreen,
    borderTopWidth: 3,
    borderRightWidth: 3,
    position: 'absolute',
  },
});

export default Loading;
