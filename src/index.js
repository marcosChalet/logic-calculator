import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './main/Calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <h1>Logic Calculator</h1>
      <App />
   </React.StrictMode>
);
