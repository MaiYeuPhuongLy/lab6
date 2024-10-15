import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [ CartItems, setCartItems ] = useState([])
  const handleAddToCart = (products) => {
    setCartItems([...CartItems, products])
  }
  const handleCheckOut = () => {
    setCartItems([])
  }
  return (
    <BrowserRouter >
      <Header CartItems={CartItems}/>
      <Routes>
          <Route path='/' element={<Products handleAddToCart={handleAddToCart} />}/>
          <Route path='/product-detail/:id' element={<ProductDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart CartItems={CartItems} handleCheckOut={handleCheckOut}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;