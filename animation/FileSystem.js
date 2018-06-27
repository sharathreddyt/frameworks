import React, { Component } from 'react';

import { Animated, Easing, View, StyleSheet, Text, Image } from 'react-native';
import { FileSystem } from 'expo';
import links from './uris';

let count = 0;
let test;
let path;
let fileName,
  arrayOfNames = [];
('file:///Users/sharatht/Library/Developer/CoreSimulator/Devices/4EA23FC0-4A8B-402C-90AE-E0633BE30811/data/Containers/Data/Application/FCA82E12-060A-40A1-8CF4-DE790D07051B/Documents/ExponentExperienceData/%2540sharaththeegulla%252Fanimation/6');
class FileSyst extends Component {
  constructor(props) {
    super(props);
    this.x();
  }

  async ensureFolderExists() {
    path = `${FileSystem.documentDirectory}MyFolder`;
    return FileSystem.getInfoAsync(path).then(({ exists }) => {
      if (!exists) {
        return FileSystem.makeDirectoryAsync(path);
      } else {
        return Promise.resolve(true);
      }
    });
  }

  x = () => {
    this.ensureFolderExists().then(() => {
      [
        `https://doapp.bluecrossmn.com/uploads/features/chill-breathecandleo-1512164713209.gif`,
        'https://doapp.bluecrossmn.com/uploads/features/cbpufferfish-loop-1490125284801.gif',
        'https://doapp.bluecrossmn.com/uploads/features/cbcat-still-1490124254579.jpg',
        'https://doapp.bluecrossmn.com/uploads/features/gstretchwrist-1-fade-1490201457653.gif',
        `https://doapp.bluecrossmn.com/uploads/features/chill-breathecandleo-1512164713209.gif`,
        'https://doapp.bluecrossmn.com/uploads/features/cbpufferfish-loop-1490125284801.gif',
        'https://doapp.bluecrossmn.com/uploads/features/cbcat-still-1490124254579.jpg',
        'https://doapp.bluecrossmn.com/uploads/features/gstretchwrist-1-fade-1490201457653.gif',
      ].map(async uri => {
        fileName = uri.split('/')[uri.split('/').length - 1];

        return await FileSystem.getInfoAsync(path + '/' + fileName).then(
          ({ exists }) => {
            if (exists) return Promise.resolve(true);
            else {
              FileSystem.downloadAsync(uri, path + '/' + fileName)
                .then(async obj => {
                  test = obj.uri;
                })
                .catch(error => {
                  console.error(error);
                });
            }
          },
        );
      });
    });
  };
  render() {
    return (
      <View>
        <Image
          style={{ height: 350, width: 350 }}
          source={{
            uri: path + `/a.jpg`,
          }}
        />
      </View>
    );
  }
}

export default FileSyst;
