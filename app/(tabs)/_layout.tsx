import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:true,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
        backgroundColor: Colors[colorScheme ?? 'light'].tabBar,
        borderTopWidth: 0,
        elevation: 8,
        height: Platform.OS === 'android' ? 72 : 60,
          paddingBottom: Platform.OS === 'android' ? 10 : 6,
          paddingTop: 4,
      },
      tabBarLabelStyle: {
        fontSize: 11,
        marginBottom: Platform.OS === 'android' ? 2 : 0,
      },
      tabBarIconStyle: {
          marginTop: 0,
        },

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel:'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarLabel:'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
