import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.tsx'

// '!' tells the element exists, so it does not raise error
createRoot(document.getElementById('root')!).render(

  // If there is <Link> in a comp, the comp should be wrapped in BrowserRouter
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
