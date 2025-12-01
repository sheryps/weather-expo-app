// components/WeatherCard.tsx
import { Colors } from '@/constants/theme';
import React from 'react';
import { Image, Platform, Pressable, View } from 'react-native';
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
    const [isHovered, setIsHovered] = React.useState(false);

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
  <Pressable
    onHoverIn={() => setIsHovered(true)}
    onHoverOut={() => setIsHovered(false)}
    style={{
      // Only animate on web hover
      transform:
        Platform.OS === 'web' && isHovered ? [{ scale: 1.02 }] : [{ scale: 1 }],
      shadowColor: '#000',
      shadowOpacity: Platform.OS === 'web' && isHovered ? 0.3 : 0.15,
      shadowRadius: Platform.OS === 'web' && isHovered ? 12 : 6,
      transitionDuration: '150ms',
    }}
  >
    <Card
      style={{
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 24,
        backgroundColor: themeColors.tint,
        elevation: 4,
        overflow: 'hidden',
      }}
    >
      <Card.Content
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 16,
        }}
      >
        <Image
          source={{ uri: iconUrl }}
          style={{ width: 72, height: 72, marginRight: 16 }}
        />
        <View style={{ flex: 1 }}>
          <Text variant="titleMedium" style={{ color: 'white' }}>
            {weather.city}
          </Text>
          <Text
            variant="headlineMedium"
            style={{ color: 'white', fontWeight: '700' }}
          >
            {Math.round(weather.temp)}°C
          </Text>
          <Text style={{ color: 'white', textTransform: 'capitalize' }}>
            {weather.description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  </Pressable>
);

};

export default WeatherCard;
