import { Link } from 'react-router-dom';
import useArticles from '../hooks/useArticles';

function Home() {
  const { articles, error } = useArticles();

  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>NY Times Most Popular Articles</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => {
          const thumbnail = article.media?.[0]?.['media-metadata']?.[0]?.url;

          return (
            <li key={article.id} style={{ marginBottom: '20px' }}>
              <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={article.title}
                      style={{ width: '75px', height: '75px', marginRight: '10px' }}
                    />
                  )}
                  <div>
                    <h3 style={{ margin: '0 0 5px 0' }}>{article.title}</h3>
                    <p style={{ margin: 0 }}>{article.abstract}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
