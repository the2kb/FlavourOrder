import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './style/index.js';

const defaultState = {};

const store = configureStore(defaultState);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
);
