import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './feature-module/App';
import { BrowserRouter } from 'react-router-dom';
import './style/scss/main.scss'
import './style/icons/fontawesome/css/all.min.css'
import './style/icons/fontawesome/css/fontawesome.min.css'
import './style/icons/boxicons/css/boxicons.min.css'
import './style/icons/feather/feather.css'
import { base_path } from './environment';
import './index.css'


const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename={base_path}>
    <App />
  </BrowserRouter>
);

