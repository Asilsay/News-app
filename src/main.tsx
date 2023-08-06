import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './presentation/router/index.js';
import './presentation/styles/index.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
