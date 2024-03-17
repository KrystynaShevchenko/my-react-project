import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/main.jsx

// Було
// import App from './App';

// Стало
import App from './components/App';
