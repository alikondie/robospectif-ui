import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
