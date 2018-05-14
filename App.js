import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux';

import store from './store';

export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
        </Provider>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
