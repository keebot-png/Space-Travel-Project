import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
=======
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 8ffe3b90733920e63655a924928f45f474d3ed4a
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
