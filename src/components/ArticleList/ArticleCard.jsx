import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, abstract, thumbnail, url }) => {
  return (
    <article>
      <Link to={url}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full object-cover rounded mb-4"
        />
        <h3 className="text-2xl font-primary font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{abstract}</p>
      </Link>
    </article>
  );
};

export default ArticleCard;
