import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Weather from './pages/Weather';
import WeatherDetail from './pages/WeatherDetail';
import {configureStore} from '@reduxjs/toolkit';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import rootReducer from './redux/index';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Weather />},
      {path: 'weather', element: <Weather />},
      {path: 'weather/:countryId', element: <WeatherDetail />},
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
