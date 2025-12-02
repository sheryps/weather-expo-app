// app/(tabs)/explore.tsx
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Linking,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: themeColors.background }}
    >
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{
            padding: 16,
            paddingBottom: 32,
            paddingTop:50
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              marginBottom: 4,
              color: themeColors.text,
            }}
          >
            About This App
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginBottom: 12,
              color: themeColors.subtext,
            }}
          >
            Location-based news headlines and live weather in one place.
          </Text>

          {/* About card */}
          <Card
            style={{
              marginBottom: 16,
              backgroundColor: themeColors.card,
              borderRadius: 20,
            }}
          >
            <Card.Content>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  color: themeColors.text,
                }}
              >
                The Home tab shows top headlines for your current region
                (or India by default) along with live weather
                information. Use the search bar to filter news by
                keyword, and tap any article to open it in your browser.
              </Text>
            </Card.Content>
          </Card>

          {/* Features */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginBottom: 8,
              color: themeColors.text,
            }}
          >
            Features
          </Text>

          <List.Section>
            <List.Item
              title="Live local weather"
              description="Temperature, condition and icon for your location."
              left={() => <List.Icon icon="weather-cloudy" />}
            />
            <List.Item
              title="Regional headlines"
              description="Top news based on your detected country."
              left={() => <List.Icon icon="newspaper" />}
            />
            <List.Item
              title="Search news"
              description="Filter articles instantly by keyword."
              left={() => <List.Icon icon="magnify" />}
            />
            <List.Item
              title="Open in browser"
              description="Read the full story in your default browser."
              left={() => <List.Icon icon="open-in-new" />}
            />
          </List.Section>

          {/* Tech stack */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginTop: 16,
              marginBottom: 8,
              color: themeColors.text,
            }}
          >
            Tech Stack
          </Text>

          <List.Section>
            <List.Item
              title="React Native + Expo"
              left={() => <List.Icon icon="react" />}
            />
            <List.Item
              title="Expo Router"
              left={() => <List.Icon icon="route" />}
            />
            <List.Item
              title="React Native Paper (UI)"
              left={() => <List.Icon icon="palette" />}
            />
            <List.Item
              title="Axios (API requests)"
              left={() => <List.Icon icon="cloud-download" />}
            />
          </List.Section>

          {/* APIs */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginTop: 16,
              marginBottom: 8,
              color: themeColors.text,
            }}
          >
            API Sources
          </Text>

          <List.Section>
            <List.Item
              title="GNews API"
              description="News headlines & articles"
              left={() => <List.Icon icon="link" />}
              onPress={() => Linking.openURL('https://gnews.io')}
            />
            <List.Item
              title="OpenWeatherMap"
              description="Current weather data"
              left={() => <List.Icon icon="link" />}
              onPress={() =>
                Linking.openURL('https://openweathermap.org/api')
              }
            />
          </List.Section>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

