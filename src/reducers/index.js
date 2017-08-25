import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import callsList from './callsList';

const rootReducer = combineReducers({
  routing,
  callsList
});

export default rootReducer;
