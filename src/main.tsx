import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// O comentário abaixo desativa o aviso visual do VS Code
// @ts-ignore
import './index.css'; 

const container = document.getElementById('root');

if (!container) {
  throw new Error('Elemento root não encontrado no index.html');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);