import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Desktop from './components/desktop/Desktop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
