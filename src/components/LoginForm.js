import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
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
        />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { email : state.auth.email, password : state.auth.password }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
