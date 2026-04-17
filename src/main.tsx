import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Certifique-se de que esse arquivo existe para o Tailwind funcionar

const container = document.getElementById('root');

if (!container) {
  throw new Error('Não foi possível encontrar o elemento root. Verifique seu index.html');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);