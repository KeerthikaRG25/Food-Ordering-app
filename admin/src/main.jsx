import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Use createRoot directly without ReactDOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
