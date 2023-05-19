import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DarkModeReducer from './DarkMode';

const persistConfig = {
  key: 'weather',
  storage,
  whitelist: ['DarkModeReducer'],
};
const rootReducer = combineReducers({
  DarkModeReducer,
});

export default persistReducer(persistConfig, rootReducer);
