import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tabswitching from './Tabswitching.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabswitching />
  </StrictMode>,
)
