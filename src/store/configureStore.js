import { createStore, combineReducers } from 'redux';
import generalInfosReducer from './reducers/generalInfos';
import players from './reducers/players';
import fileUpload from './reducers/fileUpload';
import auth from './reducers/auth';
export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
      players,
      fileUpload,
      auth,
    })
  );

  return store;
};
