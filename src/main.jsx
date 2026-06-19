import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index'
import Info from './pages/Info/index'
import { GlobalStyle } from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Home />
  </StrictMode>,
)
