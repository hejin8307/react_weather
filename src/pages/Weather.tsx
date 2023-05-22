import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import getCurrentLocation from '../service/CurrentLocation';
import WeatherAPI from '../service/WeatherAPI';
import {RootState} from '../redux/store';
import {CurrentWeatherType} from '../redux/currentWeather/CurrentWeatherSlice';
import {currentWeatherActions} from '../redux/currentWeather/CurrentWeatherSlice';

function Weather() {
  const currentWeather = useSelector<RootState, CurrentWeatherType>(
    (state) => state.CurrentWeatherReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentWeather);
  }, [currentWeather]);

  useEffect(() => {
    dispatch(currentWeatherActions.loading());
  }, []);

  return <div>hi</div>;
}

export default Weather;
