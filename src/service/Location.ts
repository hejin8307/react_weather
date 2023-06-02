import axios, {AxiosResponse} from 'axios';

export interface LocationType {
  latitude: number;
  longitude: number;
}

// export interface GoogleMap {
//   results: {geometry: {location: {lat: number; lng: number}}}[];
//   status: 'OK' | 'ZERO_RESULTS';
// }

class Location {
  async search(address: string): Promise<LocationType> {
    return address
      ? this.getLocationByCity(address)
      : this.getCurrentLocation();
  }

  async getLocationByCity(address: string): Promise<LocationType> {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    console.log(response);
    return response.data.geometry.location;
  }

  async getCurrentLocation(): Promise<LocationType> {
    return new Promise<LocationType>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          resolve({latitude, longitude});
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}

export default Location;
