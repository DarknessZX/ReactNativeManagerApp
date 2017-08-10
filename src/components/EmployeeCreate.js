import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, Input, Button, CardSection} from './common';

class EmployeeCreate extends Component {

  onButtonPress() {
    this.props.employeeCreate({
      name : this.props.name,
      phone : this.props.phone,
      shift : this.props.shift || 'Monday'
    })
  }

  render() {
    return (
      <Card>
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
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

const mapStateToProps = (state) => {
  return {
    name : state.employeeForm.name,
    phone : state.employeeForm.phone,
    shift : state.employeeForm.shift
  }
}

export default connect(mapStateToProps ,{ employeeUpdate, employeeCreate })(EmployeeCreate);
