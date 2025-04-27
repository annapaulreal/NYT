import { useState, useEffect } from 'react';
import { fetchMostPopularArticles } from '../api/nytApi';

const useArticles = (period = 7) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchMostPopularArticles(period);
        setArticles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [period]);

  return { articles, loading, error };
};

export default useArticles;
