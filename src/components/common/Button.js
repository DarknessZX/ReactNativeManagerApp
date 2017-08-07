import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle : {
    flex : 1,
    backgroundColor : '#ffffff',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#007aff',
    justifyContent : 'center',
    marginTop : 5,
    marginBottom : 5,
    height : 40
  },
  textStyle : {
    alignSelf : 'center',
    paddingTop : 10,
    paddingBottom : 10
  }
}

export { Button };
