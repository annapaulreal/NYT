import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes/Router.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Routes />
  </StrictMode>,
)
