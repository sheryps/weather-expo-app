// components/NewsList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { Article } from '../hooks/useNews';
import NewsItem from './NewsItem';

type Props = {
  articles: Article[];
  loading: boolean;
};

const NewsList: React.FC<Props> = ({ articles, loading }) => {
  if (loading) {
    return <ActivityIndicator style={{ marginTop: 16 }} />;
  }

  if (!loading && articles.length === 0) {
    return (
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        No articles found.Try a different keyword
      </Text>
    );
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => item.url + index}
      renderItem={({ item }) => <NewsItem article={item} />}
      contentContainerStyle={{ paddingBottom: 24 }}
    />
  );
};

export default NewsList;
