import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { store } from './App';
import * as serviceWorker from './serviceWorker';
import { checkAuth } from './services/auth';
import { login } from './store/actions/auth';

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <div>Loading...</div>
  </React.StrictMode>,
  document.getElementById('root')
);

const localUser = JSON.parse(localStorage.getItem('user')).user;
checkAuth(localUser)
  .then((user) => {
    console.log(user);

    store.dispatch(login(user));
    renderApp();
  })
  .then(() => {
    renderApp();
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
