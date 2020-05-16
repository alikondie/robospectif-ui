import { createStore, combineReducers } from 'redux';
import generalInfosReducer from '../reducers/general-infos';
import players from '../reducers/players';
export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
      players,
    })
  );

  return store;
};
