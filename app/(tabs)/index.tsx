// app/(tabs)/index.tsx
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import NewsList from '../../components/NewsList';
import NewsSearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/weatherCard';
import { useLocation } from '../../hooks/useLocation';
import { useNews } from '../../hooks/useNews';
import { useWeather } from '../../hooks/useWeather';
export default function HomeTab() {
  const colorScheme = useColorScheme();
const themeColors = Colors[colorScheme ?? 'light'];

  const [search, setSearch] = useState('');
  const location = useLocation();
  const { weather, loading: weatherLoading } = useWeather(location.lat, location.lon);
  const { articles, loading: newsLoading } = useNews(location.countryCode, search);

  const displayCity =(location.city === 'Unknown' || location.city === 'India') && weather?.city? weather.city: location.city

  const regionCode = (location.countryCode || 'in').toUpperCase();
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:themeColors.background,marginTop:40 }}>
      <View style={{ paddingTop: 5, flex: 1 }}>
        <Text
          style={{
    marginLeft: 16,
    marginTop: 8,
    fontSize: 22,
    fontWeight: '700',
    textAlign:'center'
      }}>
          News & Weather 
        </Text>
        <Text style={{ marginLeft: 16, marginBottom: 4,color:themeColors.subtext,fontSize:14,fontWeight:'bold',paddingTop:20 }}>
          Current Region: {displayCity},{regionCode}
        </Text>

        <WeatherCard
          weather={weather}
          loading={weatherLoading || location.loading}
        />

        <NewsSearchBar value={search} onChange={setSearch} />

        <NewsList articles={articles} loading={newsLoading} />
      </View>
    </SafeAreaView>
  );
}
