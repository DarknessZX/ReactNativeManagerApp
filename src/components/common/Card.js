import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    borderWidth : 1,
    borderRadius : 10,
    margin : 5,
    backgroundColor : '#ffffff',
    borderColor : '#CFCFCF'
  }
}

export { Card };
