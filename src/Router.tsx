import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageInfo from './pages/PageInfo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<PageInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
