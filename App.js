import React, { Component } from 'react';
import { Text, View  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import myScreen from './routes/login/Login';
import RegisterScreen from './routes/register';
import  Home from './routes/app/HomeScreen/index';
import login from './routes/login/Login';
const Navigation = StackNavigator({
  Home: { screen : myScreen},
  Register: { screen : RegisterScreen },
  Myhome: { screen : Home },
  login :{ screen : login},
})

class App extends Component{
  render(){
    return(
      <Navigation/>
    )
  }
}

export default App;
