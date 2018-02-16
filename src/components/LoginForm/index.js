import React from 'react';
import { Form, Control } from 'react-redux-form';

class LoginForm extends Component {
  render() {
    return (
      <Form model="login">
        <Control.text
          model="login.email"
          validators={{ required: val => !!val.length }}
        />
        <Errors
          model="user.username"
          messages={{ required: 'Email is required.' }}
        />
      </Form>
    );
  }
}

export default LoginForm;
