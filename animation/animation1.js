import React, { Component } from 'react';

import { Animated, Easing, View, StyleSheet, Text, Image } from 'react-native';

class Animation1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newValue: new Animated.Value(0),
    };
    this.animatedValue = new Animated.Value(0);
    this.animate = this.animate.bind(this);
  }
  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => {
      this.animate();
    });
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    const x = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    const y = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0],
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18],
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg'],
    });
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Animated.View
          style={{
            height: 30,
            width: 300,
            backgroundColor: '#cfc',
            borderRadius: 20,
          }}
        />
        <Animated.View
          style={{
            height: 30,
            width: y,
            backgroundColor: '#ccc',
            borderRadius: 20,
            position: 'absolute',
            left: 0,
          }}
        />
      </View>
    );
  }
}

export default Animation1;
