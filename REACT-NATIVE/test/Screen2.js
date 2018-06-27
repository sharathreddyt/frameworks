import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Card, Row, Col, Grid } from 'native-base';

let t = 0,
  a = [];
const { width, height } = Dimensions.get('window');

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = { changeFont: false, index: 0 };
    this.animation = new Animated.Value(0);
    this.animate = this.animate.bind(this);
  }
  animate() {
    // Animated.spring(this.animation, {
    //   toValue: 1,
    //   tension: 40,
    //   friction: 5,
    // }).start();

    Animated.timing(this.animation, {
      toValue: 1,
      duration: 10000,
    }).start();
  }
  render() {
    this.changeWidth = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.w, width],
    });
    this.changeHeight = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.h, height],
    });
    this.leftAnimation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.left + 20, 0],
    });

    let off = this.offset ? this.offset[this.state.index] : 0;
    console.log('====================================');
    console.log(off, this.offset[this.state.index], 'off');
    console.log('====================================');
    this.topAnimation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.top + off + 20, 0],
    });
    return (
      <View style={{ backgroundColor: '#236467', flex: 1 }}>
        <Text>Screen2</Text>
        <Button
          title="screen3"
          onPress={() => {
            this.props.navigation.navigate('Screen3');
          }}
        />

        <Button
          title="reset"
          onPress={() => {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                  NavigationActions.navigate({
                    routeName: 'Go',
                  }),
                ],
              }),
            );
          }}
        />
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: 300,
            height: 300,
            backgroundColor: 'yellow',
          }}
        >
          <Card
            style={{
              alignSelf: 'stretch',
            }}
          >
            <Grid>
              <Row>
                <Text>row1</Text>
              </Row>
              <Row>
                <Col>
                  <Text>col1</Text>
                </Col>
                <Col>
                  <Text>col2</Text>
                </Col>
              </Row>
            </Grid>
          </Card>
        </View> */}

        {this.state.changeFont ? (
          <Animated.View
            style={{
              position: 'absolute',
              left: this.leftAnimation,
              top: this.topAnimation,

              height: this.changeHeight,
              width: this.changeWidth,
              backgroundColor: '#fff',
            }}
          >
            <Text
              style={{
                fontSize: this.state.changeFont ? 30 : 30,
              }}
            >
              {'hello'}
            </Text>
          </Animated.View>
        ) : (
          <Animated.View
            onLayout={e => {
              this.left = e.nativeEvent.layout.x;
              this.top = e.nativeEvent.layout.y;
            }}
          >
            <FlatList
              keyExtractor={(item, index) => index}
              data={['s', 'h', 'a', 'r', 'a', 't']}
              renderItem={p => {
                return (
                  <Animated.View
                    key={p.index}
                    style={{
                      height:
                        this.state.index === p.index
                          ? this.changeHeight
                          : this.h,
                      width:
                        this.state.index === p.index
                          ? this.changeWidth
                          : this.w,
                      backgroundColor: '#fff',
                      margin: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize:
                          this.state.changeFont && this.state.index === p.index
                            ? 80
                            : 30,
                      }}
                      onPress={() => {
                        this.setState({ changeFont: true, index: p.index });
                        console.log('====================================');
                        console.log(this.x);
                        console.log('====================================');
                        console.log('====================================');
                        console.log(p.index - 1);
                        console.log('====================================');

                        let ind = p.index - 1 >= 0 ? p.index - 1 : 0;
                        this.offset = {
                          ...this.offset,
                          [ind]: this.x[ind].height + 40 * p.index,
                        };
                        console.log('====================================');
                        console.log(this.offset);
                        console.log('====================================');
                        this.animate();
                      }}
                      onLayout={e => {
                        this.x = {
                          ...this.x,
                          [p.index]: {
                            height: e.nativeEvent.layout.height,
                            width: e.nativeEvent.layout.width,
                          },
                          [`width` + p.index]: e.nativeEvent.layout.width,
                          [`height` + p.index]: e.nativeEvent.layout.height,
                        };

                        this.w = this.x[`width` + p.index];
                        this.h = this.x[`height` + p.index];
                      }}
                    >
                      {'hello'}
                    </Text>
                  </Animated.View>
                );
              }}
            />
          </Animated.View>
        )}
      </View>
    );
  }
}

export default Screen2;
