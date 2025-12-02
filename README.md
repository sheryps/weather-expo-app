# Welcome to your Expo app 👋

# News & Weather

A React Native app built with Expo that shows **location-based news headlines** and **current weather** in one place.

- Detects the user’s region from their device location (with fallback to India).
- Fetches regional top headlines from the GNews API.
- Displays current weather (temperature, condition, icon) using OpenWeatherMap.
- Includes a search bar to filter news dynamically.
- Opens full news articles in the device browser.

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/news-weather-app.git
cd news-weather-app

# next step install dependencies

npm install
# or
yarn install

# Create a .env file in the project root:

# The api should be custom made ie the user for now

EXPO_PUBLIC_GNEWS_API_KEY=your_gnews_api_key_here
EXPO_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key_here

# Note:
# You can get a free GNews API key from https://gnews.io
# You can get a free OpenWeatherMap API key from https://openweathermap.org/api

# Next Run the App

npx expo start

# Then:
# Press a for Android emulator,
# Scan the QR code with Expo Go on a physical device,
# Press w for web
# Press r for reload




# API Key Configuration Details


# GNews API
# Used for fetching top headlines and search results
# Configured via EXPO_PUBLIC_GNEWS_API_KEY
# Used in hooks/useNews.ts
# When the free-tier rate limit is exceeded, the app falls back to mock/sample articles and shows a small message instead of breaking.
# OpenWeatherMap API
# Used for current weather data (temperature, description, icon)
# Configured via EXPO_PUBLIC_OPENWEATHER_API_KEY
# Used in hooks/useWeather.ts
# Location
# Uses expo-location to request foreground location permission.
# If permission is granted, coordinates are reverse-geocoded to get the country code and city.
# If permission is denied or fails, the app defaults to India (IN) with preset coordinates (New Delhi).


# Design Decisions & Reasoning


# Expo + Expo Router
# Fast to develop and test on Android, iOS, and Web.
# expo-router provides a simple file-based navigation with a bottom tab layout (Home + About).
# Hooks for separation of concerns
# useLocation – handles permissions, geolocation, reverse geocoding, and default fallback to India.
# useWeather – fetches and maps OpenWeatherMap data to a simple shape for the UI.
# useNews – fetches GNews headlines/search results and gracefully handles rate-limit errors with mock data.
# React Native Paper
# Used for cards, lists, and the search bar.
# Provides a clean Material-style design that looks good on both Android and iOS with minimal custom styling.
# UI / UX
# All primary features live on the Home screen:
# App title
# Region label
# Weather card
# Search bar
# News list
# A secondary Explore/About tab:
# Explains app features
# Lists tech stack and APIs used
# Weather card uses a prominent colored background to visually separate it from the news list.
# The news list uses card-style items with thumbnail, title, description, and source.
# Error handling
# Loading states for location, weather, and news.
# User-friendly messages when data is unavailable.
# Fallback to sample articles when GNews free limit is hit.


# The Images of the apps are provided inside the assests/Screenshots


# Tech Stack


# React Native (Expo)
# Expo Router for navigation
# React Native Paper for UI components
# Axios for API requests
# Expo Location for geolocation