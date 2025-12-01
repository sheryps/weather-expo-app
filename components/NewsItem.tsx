// components/NewsItem.tsx
import React from 'react';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Article } from '../hooks/useNews';

type Props = {
  article: Article;
};

const NewsItem: React.FC<Props> = ({ article }) => {
  const handlePress = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card style={{ marginHorizontal: 16, marginVertical: 6 }}>
        <Card.Content style={{ flexDirection: 'row' }}>
          {article.image ? (
            <Image
              source={{ uri: article.image }}
              style={{ width: 80, height: 80, marginRight: 12, borderRadius: 6 }}
            />
          ) : null}
          <View style={{ flex: 1 }}>
            <Text variant="titleSmall" numberOfLines={2}>
              {article.title}
            </Text>
            <Text numberOfLines={3} style={{ marginTop: 4 }}>
              {article.description}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
              {article.sourceName}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default NewsItem;
