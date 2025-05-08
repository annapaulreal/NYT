import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ArticleDetail from '../pages/ArticleDetail';
import { MasterLayout } from '../components/Layout/MasterLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/article/:id" element={<ArticleDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
