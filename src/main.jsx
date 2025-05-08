import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import  Route  from './routes/Router'





import { ArticlesProvider } from './context/ArticlesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticlesProvider>
      <Route></Route>
    </ArticlesProvider>
  </StrictMode>,
)