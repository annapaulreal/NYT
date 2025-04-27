import { useParams } from 'react-router-dom';
import useArticles from '../hooks/useArticles';

function ArticleDetail() {
  const { id } = useParams();
  const { articles, loading, error } = useArticles(); // reuse the same articles

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Article not found.</p>;
  }

  const largeImage = article.media?.[0]?.['media-metadata']?.[2]?.url; // Larger image (optional)

  return (
    <div style={{ padding: '20px' }}>
      <h1>{article.title}</h1>
      {largeImage && (
        <img src={largeImage} alt={article.title} style={{ width: '100%', maxWidth: '600px' }} />
      )}
      <p><strong>Published:</strong> {article.published_date}</p>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article →
      </a>
    </div>
  );
}

export default ArticleDetail;
