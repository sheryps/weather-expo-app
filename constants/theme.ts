/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// constants/Colors.ts

const tintLight = '#6366F1'; // indigo
const tintDark = '#A5B4FC';

export const Colors = {
  light: {
    text: '#0F172A',
    subtext: '#6B7280',
    background: '#F4F4F5',
    card: '#FFFFFF',
    cardMuted: '#E5E7EB',
    tint: tintLight,
    icon: '#6B7280',
    tabBar: '#FFFFFF',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintLight,
    searchBackground: '#E5E7EB',
    accent: '#22C55E',
  },
  dark: {
    text: '#E5E7EB',
    subtext: '#9CA3AF',
    background: '#020617',
    card: '#0F172A',
    cardMuted: '#111827',
    tint: tintDark,
    icon: '#9CA3AF',
    tabBar: '#050816',
    tabIconDefault: '#6B7280',
    tabIconSelected: tintDark,
    searchBackground: '#111827',
    accent: '#22C55E',
  },
} as const;


export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
