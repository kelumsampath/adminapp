import React, { Component } from 'react';
import { Text, View  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './routes/login/Login';
import RegisterScreen from './routes/register';

const Navigation = StackNavigator({
  Home: { screen : HomeScreen},
  Register: { screen : RegisterScreen }
})

class App extends Component{
  render(){
    return(
      <Navigation/>
    )
  }
}

export default App;
