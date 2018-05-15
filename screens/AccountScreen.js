import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Config from 'react-native-config'
import { Button, Icon } from  'native-base';
import * as actions from '../actions';


import Header from '../components/Header';


class AccountScreen extends Component {

    render() {
      console.log('config is '+JSON.stringify(Config))
       return (
           <View style={{flex:1}}>
           <Header navigation={this.props.navigation} title={'Account'}/>
            <View style={styles.container}>
               <Text>{this.props.user ? this.props.user.username : '' }</Text>
               <Text>{Config.API_URL}</Text>
               <Text>AccountScreen</Text>
               <Text>AccountScreen</Text>
               <View style={{justifyContent: "center" }}>
               <Button transparent onPress={ () => this.props.navigation.navigate('settings') }><Text>Go to settings</Text></Button>
               </View>
            </View>
           </View>
       )
    }
}


const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})


export default connect(state => {
  return { user: state.user.user };
}, actions)(AccountScreen);
