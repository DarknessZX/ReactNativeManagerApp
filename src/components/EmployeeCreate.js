import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, Button, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

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
        <EmployeeForm { ...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
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
