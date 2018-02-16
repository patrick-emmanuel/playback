import React, { Component } from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import { Input } from 'reactstrap';

class LoginForm extends Component {
  render() {
    return (
      <Form model="login">
        <Control.text
          model="login.email"
          validators={{ required: val => !!val.length }}
          component={Input}
        />
        <Errors
          model="user.username"
          messages={{ required: 'Email is required.' }}
        />
        <Control.password
          model="login.email"
          validators={{ required: val => !!val.length }}
        />
        <Errors
          model="user.username"
          messages={{ required: 'Password is required.' }}
        />
      </Form>
    );
  }
}

export default LoginForm;
