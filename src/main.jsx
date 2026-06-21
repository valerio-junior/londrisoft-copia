import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles'

import { RouterProvider } from 'react-router-dom'
import routes from '../routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={routes} />
  </StrictMode>,
)
