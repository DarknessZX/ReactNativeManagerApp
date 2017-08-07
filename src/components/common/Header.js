import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textHeaderStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
    headerStyle : {
      backgroundColor : '#F8F8F8',
      justifyContent : 'center',
      alignItems : 'center',
      height : 60,
      shadowColor : '#000000',
      shadowOffset : { width : 10, height : 2},
      shadowOpacity : 0.9,
      elevation : 2,
      position : 'relative'
    },
    textHeaderStyle : {
      fontSize : 24
    }
}

export { Header };
