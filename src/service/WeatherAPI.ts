class WeatherAPI {
  async weather(lat: number, lon: number) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      {
        method: 'GET',
        redirect: 'follow',
      }
    );
    const result = await response.json();
    return result;
  }
}

export default WeatherAPI;
