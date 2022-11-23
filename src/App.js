
import './App.css';

// 컴포넌트 불러오기
import Home from "./pages/Home";
import Goods from './pages/Goods';
import Basket from './pages/Basket';
import Gallery from './pages/Gallery';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="comento-shop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
