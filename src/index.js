import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Modal from './components/Modal'
import Genres from './components/genres'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
