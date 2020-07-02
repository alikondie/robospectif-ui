import { createStore, combineReducers } from 'redux';
import generalInfosReducer from './reducers/generalInfos';
import players from './reducers/players';
import fileUpload from './reducers/fileUpload';
export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
      players,
      fileUpload,
    })
  );

  return store;
};
