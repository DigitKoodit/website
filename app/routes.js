import React from 'react';
import {Route} from 'react-router';
import App from './base/App';
import Home from './base/Home';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);