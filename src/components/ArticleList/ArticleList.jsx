import React from 'react';
import Card from './ArticleCard'; // Make sure this path is correct

const CardList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-15 p-15">
      {articles.map((article) => {
        const thumbnail =
          article.media?.[0]?.['media-metadata'].find(
            (item) => item.format === 'mediumThreeByTwo440'
          )?.url || 'https://placehold.co/440x293?text=NY+Times';

        return (
          <Card
            key={article.id}
            id={article.id}
            title={article.title}
            abstract={article.abstract}
            thumbnail={thumbnail}
            url={`/article/${article.id}`}
          />
        );
      })}
    </div>
  );
};

export default CardList;
