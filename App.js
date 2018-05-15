import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import store from './store';

export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
         <Root>
        <View style={styles.container}>
          <MainNavigator />
        </View>
         </Root>
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
