import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Calls from '../pages/Calls';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Calls} />
  </Route>
);
