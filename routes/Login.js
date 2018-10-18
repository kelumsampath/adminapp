import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text style={{color:"red"}}>kelum sampath</Text>
        <Button title="pressme" onPress={()=>{this.props.navigation.navigate('Register')}}></Button>
      </View>
    );
  }
}

export default Login;