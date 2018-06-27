import React, { Component } from 'react';
import {
  ScrollView,
  Animated,
  Easing,
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.spin = this.spin.bind(this);
  }

  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['360deg', '0deg'],
    });
    return (
      <View showsVerticalScrollIndicator={false}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: spin }],
          }}
          source={require('./football.png')}
        />
        <Text>hello</Text>
      </View>
    );
  }
}
export default Component1;
