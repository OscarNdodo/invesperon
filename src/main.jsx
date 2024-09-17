import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home'
import './assets/css/App.css'
import './assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
