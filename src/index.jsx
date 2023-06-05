
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProviderWrapper } from './context/Auth.context.jsx';
import App from '../src/app/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </React.StrictMode>,
);