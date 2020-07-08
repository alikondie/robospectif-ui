import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { checkAuth } from './services/auth';
import { login } from './store/actions/auth';

export const store = configureStore();
function App() {
  const localUser = JSON.parse(localStorage.getItem('user')).user;
  checkAuth(localUser).then((user) => {
    store.dispatch(login(user));
  });
  return (
    <Provider store={store}>
      <div className='App'>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;

// store.dispatch(
//   addPlayer({
//     id: 6468,
//     name: 'Pol Henry',
//     description: '',
//     rejectedCards: {
//       dimension: ['Large'],
//       locomotion: ['Tapis roulant'],
//       equipments: ['Frigo', 'Machine à café', 'Bureau'],
//     },
//   })
// );
// store.dispatch(
//   addPlayer({
//     id: 123,
//     name: 'Lol Manakin',
//     description: '',
//     rejectedCards: {
//       dimension: ['Large'],
//       locomotion: ['Tapis roulant'],
//       equipments: ['Frigo', 'Machine à café', 'Bureau'],
//     },
//   })
// );

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//store.dispatch()
