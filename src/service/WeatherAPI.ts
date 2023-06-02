import axios, {AxiosResponse} from 'axios';

class WeatherAPI {
  async weather(lat: number, lon: number): Promise<any> {
    const result: AxiosResponse<any> = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return result.data;
  }
}

export default WeatherAPI;
