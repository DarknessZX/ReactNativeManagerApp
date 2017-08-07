import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    backgroundColor : 'transparent',
    justifyContent : 'flex-start',
    flexDirection : 'row',
    borderBottomWidth : 1,
    padding : 10,
    borderColor : '#CFCFCF'
  }
}

export { CardSection };
