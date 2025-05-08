import React from 'react';
import { useArticlesContext } from '../context/ArticlesContext';
import CardList from '../components/ArticleList/ArticleList';
import '../main.css';

function Home() {
  const { articles } = useArticlesContext();

  return (
      <div className="p-6">
        <h1 className="text-center text-4xl md:text-6xl font-primary my-6">
          NY Times Most Popular Articles
        </h1>

        <div>
          <CardList articles={articles} />
        </div>
      </div>
  );
}

export default Home;
