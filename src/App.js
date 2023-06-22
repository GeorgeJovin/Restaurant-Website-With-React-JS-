import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
