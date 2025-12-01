// components/SearchBar.tsx
import React from 'react';
import { Searchbar } from 'react-native-paper';

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const NewsSearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Searchbar
      placeholder="Search news..."
      value={value}
      onChangeText={onChange}
      style={{ marginHorizontal: 16, marginBottom: 8 }}
    />
  );
};

export default NewsSearchBar;
