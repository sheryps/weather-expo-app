// hooks/useWeather.ts
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OPEN_WEATHER_API_KEY } from '../constants/config';

type WeatherData = {
  temp: number;
  description: string;
  icon: string;
  city: string;
};

export function useWeather(lat: number | null, lon: number | null) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lat == null || lon == null) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              lat,
              lon,
              units: 'metric',
              appid: OPEN_WEATHER_API_KEY,
            },
          }
        );

        const data = res.data;
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          city: data.name,
        });
      } catch (err) {
        console.warn('Weather error', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { weather, loading };
}
