import React, {useEffect, useState} from 'react';
import UseGeolocation from '../hooks/UseGeolocation';
import getCurrentLocation, {LocationType} from '../service/CurrentLocation';
import WeatherAPI from '../service/WeatherAPI';

function Weather() {
  //   const location = UseGeolocation();

  const [weather, setWeather] = useState<any>(null);

  //   useEffect(() => {
  //     const fetchLocation = async () => {
  //       try {
  //         const currentLocation = await getCurrentLocation();
  //         setLocation(currentLocation);
  //       } catch (error) {
  //         console.log('Error retrieving location : ', error);
  //       }
  //     };
  //     fetchLocation();
  //   }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherAPI = new WeatherAPI();
        const currentLocation = await getCurrentLocation();
        const {latitude, longitude} = currentLocation;
        const result = await weatherAPI.weather(latitude, longitude);
        setWeather(result);
      } catch (error) {
        console.error('Error retrieving weather data:', error);
      }
    };
    fetchWeather();
  }, []);
  return (
    // <div>
    //   {location.loaded
    //     ? JSON.stringify(location)
    //     : 'Location data not available yet'}
    // </div>
    <div>
      {weather ? (
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Weather;
