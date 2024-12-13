import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import CartStore from './Redux/CartStore.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={CartStore}>
        <App />
        </Provider>
  
    </BrowserRouter>
   
  </StrictMode>,
)
