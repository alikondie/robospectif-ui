import { createStore, combineReducers } from 'redux';
import generalInfosReducer from '../reducers/general-infos';
export default () => {
  const store = createStore(
    combineReducers({
      generalInfos: generalInfosReducer,
    })
  );
};
