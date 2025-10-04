import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React router
import { BrowserRouter } from 'react-router-dom'

//Provider
import { ProductProvider } from './context/ProductProvider/index.jsx';
import { CartProvider } from './context/CartProvider/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <BrowserRouter basename='/store'>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </StrictMode>,
)
