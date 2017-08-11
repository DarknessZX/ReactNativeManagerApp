import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            labelText="Name"
            placeholderText="Long"
            value={ this.props.name }
            onChangeText={ text => this.props.employeeUpdate({ prop : 'name', value : text }) }/>
        </CardSection>

        <CardSection>
          <Input
            labelText="Phone"
            placeholderText="999-999-999"
            value={this.props.phone}
            onChangeText={ text => this.props.employeeUpdate({ prop : 'phone', value : text }) }/>
        </CardSection>

        <CardSection>
          <Text style={styles.shiftTextStyle}>
            Shift :
          </Text>
          <Picker
            style={{flex : 2}}
            selectedValue={this.props.shift}
            onValueChange={ day => this.props.employeeUpdate({ prop : 'shift', value : day }) }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  shiftTextStyle : {
    alignSelf : 'center',
    paddingLeft : 20,
    fontSize : 18,
    flex : 1
  }
}

const mapStateToProps = state => {
  return {
    name : state.employeeForm.name,
    phone : state.employeeForm.phone,
    shift : state.employeeForm.shift
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
