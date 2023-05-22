import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DarkModeReducer from './DarkModeSlice';
import CurrentWeatherReducer from './CurrentWeatherSlice';

const persistConfig = {
  key: 'weather',
  storage,
  whitelist: ['DarkModeReducer'],
};
const rootReducer = combineReducers({
  DarkModeReducer,
  CurrentWeatherReducer,
});

export default persistReducer(persistConfig, rootReducer);
