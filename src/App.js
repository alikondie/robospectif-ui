import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addPlayer } from '../src/actions/players';

const store = configureStore();

store.dispatch(
  addPlayer({
    id: 6468,
    name: 'Pol Henry',
    description: '',
    rejectedCards: {
      dimension: ['Large'],
      locomotion: ['Tapis roulant'],
      equipments: ['Frigo', 'Machine à café', 'Bureau'],
    },
  })
);
store.dispatch(
  addPlayer({
    id: 123,
    name: 'Lol Manakin',
    description: '',
    rejectedCards: {
      dimension: ['Large'],
      locomotion: ['Tapis roulant'],
      equipments: ['Frigo', 'Machine à café', 'Bureau'],
    },
  })
);

/*store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
*/

//store.dispatch()
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
