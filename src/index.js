import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { DataUserProvider } from './DataUserContext'


ReactDOM.render(
  <React.StrictMode>
    <DataUserProvider>
    <App />
    </DataUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
