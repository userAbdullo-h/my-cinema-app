import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/components/styles/index.scss'
import App from './components/app/app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
