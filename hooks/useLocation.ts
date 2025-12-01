// hooks/useLocation.ts
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

type LocationState = {
  countryCode: string;
  city: string;
  lat: number | null;
  lon: number | null;
  loading: boolean;
  error?: string | null;
};

export function useLocation(): LocationState {
  const [state, setState] = useState<LocationState>({
    countryCode: 'in', // default India
    city: 'India',
    lat: null,
    lon: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setState(prev => ({
            ...prev,
            loading: false,
            error: 'Location permission denied',
          }));
          return;
        }

        const pos = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = pos.coords;

        const geocode = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        const first = geocode[0];
        const countryCode = (first?.isoCountryCode || 'IN').toLowerCase();
        const city = first?.city || first?.region || 'Unknown';

        setState({
          countryCode,
          city,
          lat: latitude,
          lon: longitude,
          loading: false,
          error: null,
        });
      } catch (e) {
        console.warn('Location error', e);
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to get location',
        }));
      }
    })();
  }, []);

  return state;
}
