import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useArticlesContext } from '../context/ArticlesContext';

function Skeleton() {
  return (
    <div className="content-center mx-auto max-w-3xl px-4 py-8 animate-pulse">
      <div className="w-full h-96 bg-gray-300 rounded mb-4"></div>

      <div className="h-8 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>

      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-10 bg-gray-300 rounded w-40"></div>
      </div>
    </div>)
}

const ArticleDetail = () => {
  const { id } = useParams();
  const { articles } = useArticlesContext();
  const [article, setArticle] = useState(null)

  useEffect(() => {
    let _article = articles.find(item => item.id === parseInt(id));
    setArticle(_article);
  }, [articles, id]);

  const largeImage = (a) => {
    // a = article
    let src = a.media?.[0]?.['media-metadata'].find(item => item.format === 'mediumThreeByTwo440')?.url || 'https://placehold.co/440x293?text=NY+Times';
    return (
      <img
        src={src}
        alt={a.title}
        className="w-full h-96 object-cover rounded"
      />
    );
  };

  return (
    <div>
      {!article ? (
        <Skeleton />
      ) : (
        <div className="content-center mx-auto max-w-3xl px-4 py-8">
          {largeImage(article)}
          <h1 className="font-bold text-2xl font-primary mt-4">{article.title}</h1>
          <p className="text-gray-600 mb-4">{article.abstract}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 mb-8">Published on: {article.published_date}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-3 rounded"
            >
              Read Full Article →
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
