import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';


class LoginScreen extends Component {

    render() {
       return (
         <View style={styles.container}>
               <Item>
                 <Input style={{color:'black'}} placeholder='User Name'/>
                 <Icon active name='ios-contact' />
               </Item>
               <Item>
                 <Input placeholder='Password'/>
                 <Icon active name='ios-lock' />
               </Item>
             <View style={{justifyContent: "center" }}>
               <Button primary onPress={() => this.props.navigation.navigate('main')} style={styles.loginButtom}><Text style={{color:'white'}}> Login </Text></Button>
             </View>
        </View>
       )
    }
}


const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         color: 'black'
    },
    loginButtom: {
        width:200,
        justifyContent:'center',
        marginTop:20
    }
})

export default LoginScreen;
