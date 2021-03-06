import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      animationType={"slide"}
      transparent
      visible={true}
      onRequestClose={() => {} }
    >
      <View style={ styles.containerStyle }>
        <CardSection>
          <Text style={ styles.textStyle }>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>

          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle : {
    justifyContent : 'center'
  },
  textStyle : {
    flex : 1,
    fontSize : 18,
    textAlign : 'center',
    lineHeight : 40
  },
  containerStyle : {
    backgroundColor : 'rgba(0,0,0,0.75)',
    position : 'relative',
    justifyContent : 'center',
    flex : 1
  }
}

export { Confirm }
