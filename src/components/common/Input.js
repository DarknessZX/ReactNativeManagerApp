import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>
        {props.labelText}
      </Text>
      <TextInput
        placeholder={props.placeholderText}
        autoCorrect={false}
        value={props.value}
        style={styles.textInputStyle}
        onChangeText={props.onChangeText}
        secureTextEntry={props.isPasswordField}
      />
    </View>
  )
}

const styles = {
  textInputStyle : {
    color : '#000000',
    marginRight : 5,
    marginLeft : 5,
    flex : 2,
    fontSize : 18,
    borderWidth : 0
  },
  labelStyle : {
    flex : 1,
    fontSize : 18,
    marginLeft : 20
  },
  containerStyle : {
    flex : 1,
    height : 40,
    flexDirection : 'row',
    alignItems : 'center',
  }
}

export { Input }
