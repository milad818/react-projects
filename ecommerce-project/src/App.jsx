
import axios from 'axios'
import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { useState, useEffect } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // axios.get('/api/cart-items?expand=product')
    //   .then((response) => {
    //     setCart(response.data);
    //   });

    // ALTERNATIVE
    // Note that useEffect should not return a promise, it returns nothing or a cleanup function
    // That's why a new function is created inside useEffect
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    };

    fetchAppData()
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart= {cart} />} />
      <Route path="checkout" element={ <CheckoutPage cart={cart} /> } />
      <Route path="orders" element={ <OrdersPage cart={cart} />} />
    </Routes>
    
  )
}

export default App
