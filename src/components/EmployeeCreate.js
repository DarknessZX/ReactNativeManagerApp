import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Input, Button, CardSection} from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input labelText="Name" placeholderText="Long" />
        </CardSection>
        <CardSection>
          <Input labelText="Phone" placeholderText="999-999-999" />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate;
