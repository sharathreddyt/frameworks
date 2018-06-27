import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width / 4;
const DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
    data: [],
    renderCard: () => {},
    renderNoMoreCards: () => {},
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) this.forceSwipe('right');
        else if (gesture.dx < -SWIPE_THRESHOLD) this.forceSwipe('left');
        else this.resetPosition();
      },
    });

    this.state = { panResponder, position, index: 0 };
  }
  forceSwipe(direction) {
    const x = direction === 'right' ? width : -width;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: DURATION,
    }).start(() => {
      this.onSwipeComplete(direction);
    });
  }
  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }
  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }
  getCardStyle() {
    const { position } = this.state;

    const rotate = position.x.interpolate({
      inputRange: [-width * 1.5, 0, width * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }

  renderCards() {
    const { data, renderCard } = this.props;

    if (this.state.index >= data.length) {
      return this.props.renderNoMoreCards();
    }

    return data
      .map((item, index) => {
        if (index < this.state.index) {
          return null;
        }
        if (index === this.state.index) {
          return (
            <Animated.View
              key={item.id}
              {...this.state.panResponder.panHandlers}
              style={[this.getCardStyle(), styles.cardStyle]}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }
        return (
          <View key={item.id} style={styles.cardStyle}>
            {renderCard(item)}
          </View>
        );
      })
      .reverse();
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: width,
  },
});

export default Deck;
