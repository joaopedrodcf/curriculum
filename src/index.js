import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';

// Used Hashrouter here to be compatible with github pages and react router
ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root'),
);
