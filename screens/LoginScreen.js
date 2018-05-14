import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';
import axios from 'axios';
import * as actions from '../actions';

// const ROOT_URL = 'https://us-central1-one-time-project-7f632.cloudfunctions.net';

class LoginScreen extends Component {
  state = { username: '', password: '', error: null, loading: false };


      handleSubmit = async () => {
      this.setState({ error: null, loading: true });

      try {
        // let { data } = await axios.post(`${ROOT_URL}/verifyOTP`, { username: this.state.username, code: this.state.username })
          let data = {username:this.state.username,password:this.state.password};
          this.props.signIn(data, () => {
              this.props.navigation.navigate('main');
          }).catch(error => {
            return error;
          });
        this.props.navigation.navigate('main')
        this.setState({ loading: false });
      } catch (err) {
        this.setState({ error: 'Something went wrong', loading: false });
      }
    }


    componentWillReceiveProps(newProps){
        console.log('newProps are '+JSON.stringify(newProps));
    }

    render() {
       return (
         <View style={styles.container}>
               <Item>
                 <Input style={{color:'black'}} placeholder='User Name' value={this.state.username} onChangeText={username => this.setState({ username })}/>
                 <Icon active name='ios-contact' />
               </Item>
               <Item>
                 <Input placeholder='Password' value={this.state.password} onChangeText={password => this.setState({ password })}/>
                 <Icon active name='ios-lock' />
               </Item>
             <View style={{justifyContent: "center" }}>
              {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <Button primary onPress={() => this.handleSubmit()} style={styles.loginButtom}><Text style={{color:'white'}}> Login </Text></Button>
              }
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
    },
    loginButtom: {
        width:200,
        justifyContent:'center',
        marginTop:20
    }
})

export default connect(null, actions)(LoginScreen);
