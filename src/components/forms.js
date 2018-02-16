import { combineForms } from 'react-redux-form';

const userLogin = {
  email: '',
  password: ''
};

export default combineForms({
  login: userLogin
});
