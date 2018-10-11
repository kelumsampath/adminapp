import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TopHead extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.black}>kelum sampath</Text>
      </View>
    );
  }
}

export default TopHead;


const styles = StyleSheet.create({
    container: {
        
    backgroundColor: 'red',
    width:'100%',
    height:'20%'
      },
    
  });