import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';
import { BrowserRouter } from 'react-router-dom'; // Needed for <Link>

const mockArticles = [
  {
    id: 1,
    title: 'Test Article',
    abstract: 'This is a test article',
    media: [
      {
        'media-metadata': [
          { url: 'test-image.jpg' }
        ]
      }
    ],
  },
];

describe('ArticleList', () => {
  test('renders article title and abstract', () => {
    render(
      <BrowserRouter>
        <ArticleList articles={mockArticles} loading={false} error={null} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is a test article')).toBeInTheDocument();
  });

  test('renders loading state', () => {
    render(
      <ArticleList articles={[]} loading={true} error={null} />
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error state', () => {
    render(
      <ArticleList articles={[]} loading={false} error={{ message: 'Failed to fetch' }} />
    );

    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });
});
