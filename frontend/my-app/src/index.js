import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';





ReactDOM.render(
  <React.StrictMode>
    

     <Auth0Provider domain="dev-1xpa6gvs.us.auth0.com" clientId ="0EKst9im5IGPaiUrP5Y0WpUZ7JYQCDwI" redirectUri={window.location.origin}> 
   
    <App />,
    
    </Auth0Provider> 
    

    
  </React.StrictMode>,
  document.getElementById('root')
);

