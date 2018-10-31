import React from "react";
import {  View, Text ,TouchableOpacity,StyleSheet} from 'react-native';

export default class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tokenValue: '',
    }

}
componentDidMount() {
  this.getToken().done();
}

getToken = async () => {
  try {
      this.tokenValue = AsyncStorage.getItem('token')
      alert(this.tokenValue)
  } catch (error) {
      alert('Unknown error, token not retrive');
  }
}
  render() {
    return (
      <View>
      <Text style={{color:"red"}}>third page</Text>
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.componentDidMount()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </View>
    );
  }
}

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