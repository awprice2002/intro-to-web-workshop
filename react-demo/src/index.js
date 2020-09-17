import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode> {/* Enforces some checking */}
    <App intialCount={9}/>
  </React.StrictMode>,
  document.getElementById('root')
);
