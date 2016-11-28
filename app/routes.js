import React from 'react';
import {Route} from 'react-router';
import App from './base/App';
import Home from './base/Home';
import BasicInfo from './basics/BasicInfo';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/perustietoa' component={BasicInfo} />
    <Route path='/toiminta' component={BasicInfo} />
    <Route path='/teekkarius' component={Home} />
    <Route path='/tapahtumat' component={Home} />
    <Route path='/opikselijalle' component={Home} />
    <Route path='/palaute' component={Home} />
    <Route path='/yhteystiedot' component={Home} />
    <Route path='/webcam' component={Home} />
  </Route>
);