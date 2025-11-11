
import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<div>Test Checkout Page</div>}></Route>
    </Routes>
    
  )
}

export default App
