import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginUser() {
    this.props.loginUser({
      email : this.props.email,
      password : this.props.email
    })
  }

  renderButton() {
    if (this.props.loginLoading) {
      return (
        <Spinner size='large' />
      )
    }
    return (
      <Button onPress ={this.onLoginUser.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText = 'Email'
            placeholderText = 'email@gmail.com'
            onChangeText = {this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>

        <CardSection>
        <Input
          isPasswordField
          labelText = 'Password'
          placeholderText = 'password'
          value = {this.props.password}
          onChangeText = {this.onPasswordChange.bind(this)}
        />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.err}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle : {
    fontSize : 20,
    alignSelf : 'center',
    color : 'red',
    padding : 5
  }
}

const mapStateToProps = state => {
  return {
    email : state.auth.email,
    password : state.auth.password,
    err : state.auth.err,
    loginLoading : state.auth.loginLoading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
