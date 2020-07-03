import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { startLogin } from './LoginApi';
import { login } from '../../../store/actions/auth';
const LoginPage = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Robospectif</h1>
      <LoginForm
        onSubmit={(userForm) => {
          startLogin(userForm).then((user) => {
            dispatch(login(user));
            props.history.push('/dashboard');
          });
        }}
      />
    </React.Fragment>
  );
};

export default LoginPage;
