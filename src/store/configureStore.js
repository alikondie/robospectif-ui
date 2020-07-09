import { createStore, combineReducers } from 'redux';
import generalInfosReducer from './reducers/generalInfos';
import players from './reducers/players';
import turns from './reducers/turns';
import debates from './reducers/debates';
import gameUpload from './reducers/gameUpload';
import auth from './reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
      players,
      turns,
      debates,
      gameUpload,
      auth,
    })
  );

  return store;
};
