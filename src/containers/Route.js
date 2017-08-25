import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Order from '../pages/Order';
import Page404 from '../pages/Page404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Order} />
    <Route path="*" exact={true} component={Page404} />
  </Route>
);
