# NYT News Web App

A modern React-based news application that mimics the New York Times interface, providing users with an engaging way to browse and read the latest news articles.

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite for fast development
- **Styling**: Tailwind CSS for responsive design  
- **Routing**: React Router for navigation
- **API**: NYT API integration for fetching articles
- **Testing**: Jest + Testing Library setup
- **E2E Testing**: Cypress configured

## ✨ Key Features

📰 **Article listing with card components** - Browse articles in an organized grid layout  
📖 **Article detail pages** - Read full articles with rich formatting  
🎨 **Clean, responsive layout** - Modern design with header navigation  
🔍 **NYT API integration** - Real-time news data from New York Times  

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run E2E tests
npm run cypress:open

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── api/           # API integration
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── routes/        # Routing configuration
└── utils/         # Utility functions
```

## 🧪 Testing

- **Unit Tests**: Jest with Testing Library
- **E2E Tests**: Cypress for end-to-end testing
- **Coverage**: Run `npm run test:coverage` for test coverage reports

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS, ensuring optimal viewing experience across all devices.