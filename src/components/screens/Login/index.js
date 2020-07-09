import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../../services/auth';
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
            localStorage.setItem(
              'user',
              JSON.stringify({ token: user.token, user: user.user._id })
            );
            props.history.push('/');
          });
        }}
      />
    </React.Fragment>
  );
};

export default LoginPage;
