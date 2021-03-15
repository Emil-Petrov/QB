import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

const root = document.getElementById('root');

ReactDOM
  .unstable_createRoot(root)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
