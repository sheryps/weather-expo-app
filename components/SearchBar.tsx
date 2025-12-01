// components/SearchBar.tsx
import { Colors } from '@/constants/theme';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useColorScheme } from '../hooks/use-color-scheme';
type Props = {
  value: string;
  onChange: (text: string) => void;
};

const NewsSearchBar: React.FC<Props> = ({ value, onChange }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <Searchbar
      placeholder="Search news..."
      value={value}
      onChangeText={onChange}
      style={{ 
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 999,
        backgroundColor: themeColors.searchBackground,
        elevation: 0,
       }}
       inputStyle={{ fontSize: 15 }}
      iconColor={themeColors.subtext}
    />
  );
};

export default NewsSearchBar;
