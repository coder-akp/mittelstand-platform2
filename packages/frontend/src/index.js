import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have any styles in index.css
import App from './App';  // Your main App component
import reportWebVitals from './reportWebVitals';  // Optional: for performance monitoring

// Render the App component inside the div with id="root" from the index.html file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
reportWebVitals();
