export interface LocationType {
  latitude: number;
  longitude: number;
}

const getCurrentLocation = (): Promise<LocationType> => {
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
};

export default getCurrentLocation;
