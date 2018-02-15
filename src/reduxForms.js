import { combineForms } from 'react-redux-form';

const initialEmail = { email: '' };

const reduxForms = combineForms({
  signUpHero: initialEmail
});

export default reduxForms;
