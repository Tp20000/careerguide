import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-wp0y6m47y3odlou7.us.auth0.com"
    clientId="1FJz7ikKFiIuSGDRoPD3IQGEaKDrWB4b"
    authorizationParams={{
      redirect_uri: 'https://careerguide-two.vercel.app/dashboard',
    }}
  >
  
    <App />
  
  </Auth0Provider>,
)
