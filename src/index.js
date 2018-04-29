import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes />
  </HashRouter>,
  document.getElementById('root'),
);
