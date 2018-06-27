import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import extractBrush from 'react-native-svg/lib/extract/extractBrush';

export default class extends PureComponent {
  static propTypes = {
    fill: PropTypes.string,
    path: PropTypes.string.isRequired,
  };
  static defaultProps = {
    fill: 'rgba(0, 33, 71, 1)',
  };

  constructor(props) {
    super(props);
    this.lastFill = this.props.fill;

    this.state = {
      fillValue: new Animated.Value(0),
    };

    this.state.fillValue.addListener(() => {
      const { fill } = this.props;
      const { fillValue } = this.state;
      const color = fillValue.interpolate({
        inputRange: [0, 1],
        outputRange: [this.lastFill, fill],
      });
      this.path.setNativeProps({
        fill: extractBrush(color.__getAnimatedValue()),
      });
    });
  }

  animate = () => {
    const { fillValue } = this.state;
    Animated.timing(fillValue, {
      toValue: 1,
      duration: 2000,
    }).start(({ finished }) => {
      if (finished) {
        this.lastFill = this.props.fill;
        this.state.fillValue.setValue(0);
      }
    });
  };

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  render() {
    return (
      <Svg width="266" height="200" style={{ flex: 1 }}>
        <Path
          d={this.props.path}
          ref={ref => (this.path = ref)}
          fill={this.state.lastFill}
        />
      </Svg>
    );
  }
}
