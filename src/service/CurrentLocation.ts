export interface LocationType {
  latitude: number;
  longitude: number;
}

function getCurrentLocation(): Promise<LocationType> {
  return new Promise<LocationType>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        console.log(position);
        resolve({latitude, longitude});
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export default getCurrentLocation;
