import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';
import { fetchMostPopularArticles } from '../api/nytApi';

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchMostPopularArticles();
        setArticles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading, error }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
