import {useEffect, useState} from 'react';

interface locationType {
  loaded: boolean;
  coordinates?: {lat: number; lng: number};
  error?: {code: number; message: string};
}

const UseGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: {lat: 0, lng: 0},
  });

  const onSuccess = (location: {
    coords: {latitude: number; longitude: number};
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: {code: number; message: string}) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default UseGeolocation;
