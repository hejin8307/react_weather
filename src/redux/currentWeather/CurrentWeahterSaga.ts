import React from 'react';
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import getCurrentLocation from '../../service/CurrentLocation';
import WeatherAPI from '../../service/WeatherAPI';
import {currentWeatherActions} from './CurrentWeatherSlice';

const weatherAPI = new WeatherAPI();

function* CurrentWeahter(): Generator<any, void, any> {
  try {
    const currentLocation = yield call(getCurrentLocation);
    const {latitude, longitude} = currentLocation;
    console.log(`lat: ${latitude}, lon: ${longitude}`);
    const response: AxiosResponse = yield call(
      WeatherAPI.weather,
      latitude,
      longitude
    );
    yield put(currentWeatherActions.success(response));
  } catch (error) {
    yield put(currentWeatherActions.fail(error));
  }
}

// CurrentWeather 액션을 감지하는 saga
function* watchCurrentWeather() {
  yield takeLatest(currentWeatherActions.loading, CurrentWeahter);
}

export default function* CurrentWeahterSaga() {
  yield all([fork(watchCurrentWeather)]);
}
