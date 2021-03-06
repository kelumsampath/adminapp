import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet , AsyncStorage } from 'react-native';

class Login extends Component{

  constructor(props){
    super(props);
  }
  state={
    username:'',
    password:''
  };
  handleUsername=(text)=>{
    this.setState({username:text})
  }
  handlePassword =(text)=>{
    this.setState({password:text})
  }
  login(username,password){
    fetch('http://192.168.137.1:3000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
  })

      .then((response) => response.json())
      .then((res) => {

          if (res.state === true) {
            if(res.user.role=='admin'){
              AsyncStorage.setItem('token', res.token);
              alert(res.user.role+'connected from backend');
              this.props.navigation.navigate('Register');
            }else{
              alert(res.user.role+' NOT A ADMIN USER');
            }
              
          } else {
              alert(res.msg)
          }
      })
      .done();
  }

  render(){
    return(
      <View style = {styles.container}>
            <Text>Username:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>
            
            <Text>Password:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})
