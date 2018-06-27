import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/index';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCL5qNa8oeDq8QTseOb7MvDkJFogr6GN2U',
      authDomain: 'manager-dbc95.firebaseapp.com',
      databaseURL: 'https://manager-dbc95.firebaseio.com',
      projectId: 'manager-dbc95',
      storageBucket: 'manager-dbc95.appspot.com',
      messagingSenderId: '125127659041',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
