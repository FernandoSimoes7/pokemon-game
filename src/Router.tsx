import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageInfo from "./pages/PageInfo";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<PageInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
