// hooks/useNews.ts
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GNEWS_API_KEY } from '../constants/config';

export type Article = {
  title: string;
  description: string;
  image: string | null;
  url: string;
  sourceName: string;
  publishedAt: string;
};

export function useNews(countryCode: string, searchQuery: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!countryCode) return;

    const fetchNews = async () => {
      try {
        setLoading(true);

        const endpoint = searchQuery.trim()
          ? 'https://gnews.io/api/v4/search'
          : 'https://gnews.io/api/v4/top-headlines';

        const params: any = {
          apikey: GNEWS_API_KEY,
          lang: 'en',
          country: countryCode,
        };

        if (searchQuery.trim()) {
          params.q = searchQuery;
        }

        const res = await axios.get(endpoint, { params });
        const data = res.data;

        const mapped: Article[] = (data.articles || []).map((a: any) => ({
          title: a.title,
          description: a.description,
          image: a.image || null,
          url: a.url,
          sourceName: a.source?.name || '',
          publishedAt: a.publishedAt,
        }));

        setArticles(mapped);
      } catch (err) {
        console.warn('News error', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [countryCode, searchQuery]);

  return { articles, loading };
}
