// components/WeatherCard.tsx
import { Colors } from '@/constants/theme';
import React from 'react';
import { Image, View } from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { useColorScheme } from '../hooks/use-color-scheme';
type Props = {
  weather: {
    temp: number;
    description: string;
    icon: string;
    city: string;
  } | null;
  loading: boolean;
};

const WeatherCard: React.FC<Props> = ({ weather, loading }) => {
    const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  if (loading) {
    return (
      <Card style={{ 
          marginHorizontal: 16,
          marginVertical: 8,
          borderRadius: 20,
          backgroundColor: themeColors.card,
          elevation: 2,


       }}>
        <Card.Content style={{ paddingVertical: 24, alignItems: 'center' }}>
          <ActivityIndicator />
          <Text style={{ marginTop: 8, color: themeColors.subtext }}>Loading weather...</Text>
        </Card.Content>
      </Card>
    );
  }

  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <Card style={{ margin: 16 }}>
      <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: iconUrl }}
          style={{ width: 60, height: 60, marginRight: 12, borderRadius: 30 }}
        />
        <View>
          <Text variant="titleMedium">{weather.city}</Text>
          <Text variant="headlineMedium">{Math.round(weather.temp)}°C</Text>
          <Text>{weather.description}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default WeatherCard;
