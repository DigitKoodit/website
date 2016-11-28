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
    <Route path='/teekkarius' component={BasicInfo} />
    <Route path='/tapahtumat' component={BasicInfo} />
    <Route path='/opikselijalle' component={BasicInfo} />
    <Route path='/palaute' component={BasicInfo} />
    <Route path='/yhteystiedot' component={BasicInfo} />
    <Route path='/webcam' component={BasicInfo} />
  </Route>
);