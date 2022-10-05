
import './App.css';

// 컴포넌트 불러오기
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="comento-shop">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
