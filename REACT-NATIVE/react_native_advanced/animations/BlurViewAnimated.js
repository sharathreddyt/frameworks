import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ImageEditor,
  ImageStore,
  Image,
} from 'react-native';
import { BlurView } from 'expo';
// import { Image } from 'react-native-expo-image-cache';
const previewParams = (width, height) => ({
  offset: {
    x: 0,
    y: 0,
  },
  size: {
    width,
    height,
  },
  displaySize: {
    width: 50,
    height: 50,
  },
  resizeMode: 'cover',
});

const uri = 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg';
//   'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
export default class BlurViewAnimated extends React.Component {
  state = {
    intensity: new Animated.Value(100),
    modifiedUri:
      'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  };

  componentDidMount() {
    this._animate();
    this.buildPreview({
      uri,
      width: 50,
      height: 50,
    }).then(response => {
      this.baseUri = response;
      this.setState({
        modifiedUri: response,
      });
      console.log('====================================');
      console.log(this.baseUri);
      console.log('====================================');
    });
  }

  buildPreview({ uri, width, height }) {
    return new Promise((resolve, reject) =>
      ImageEditor.cropImage(
        uri,
        previewParams(width, height),
        uri =>
          ImageStore.getBase64ForTag(
            uri,
            data => resolve(`data:image/jpeg;base64,${data}`),
            err => reject(err),
          ),
        err => reject(err),
      ),
    );
  }

  _animate = () => {
    let { intensity } = this.state;
    Animated.timing(intensity, {
      duration: 2000,
      toValue: 0,
    }).start();
  };

  render() {
    let { modifiedUri } = this.state;
    return <Image source={{ uri: modifiedUri }} width={50} height={50} />;
  }
}
