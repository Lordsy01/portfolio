import React from 'react';
import ReactDOM from 'react-dom/client'; // Or 'react-dom' for older React versions
import './index.css'; // Global styles (optional)
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional performance reporting

const root = ReactDOM.createRoot(document.getElementById('root')); // For React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();