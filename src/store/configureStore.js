import { createStore, combineReducers } from 'redux';
import generalInfosReducer from './reducers/generalInfos';
import players from './reducers/players';
export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
      players,
    })
  );

  return store;
};
