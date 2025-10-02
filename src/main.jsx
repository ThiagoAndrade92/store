import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React router
import { BrowserRouter } from 'react-router-dom'

//Provider
import { ProductProvider } from './context/ProductProvider/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter basename='/store'>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
