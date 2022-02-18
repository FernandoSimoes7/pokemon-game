import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PageInfo from './Pages/PageInfo';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<PageInfo />} />
        <Route path="/info/:id" element={<PageInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
