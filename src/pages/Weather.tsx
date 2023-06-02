import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {CurrentWeatherType} from '../redux/currentWeather/CurrentWeatherSlice';
import {currentWeatherActions} from '../redux/currentWeather/CurrentWeatherSlice';

function Weather() {
  const currentWeather = useSelector<RootState, CurrentWeatherType>(
    (state) => state.CurrentWeatherReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentWeatherActions.loading());
  }, []);

  useEffect(() => {
    console.log(currentWeather);
  }, [currentWeather]);

  return <div>hi</div>;
}

export default Weather;
