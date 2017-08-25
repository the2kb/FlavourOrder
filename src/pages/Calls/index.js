import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import callsActions from '../../actions/callsList';

import './styles.scss';

@connect(
  state => ({
    // callsList: state.callsList
  }),
  dispatch => ({
    // actions: bindActionCreators({...callsActions}, dispatch)
  })
)
export default class Calls extends React.Component {

  render() {

    return (
      <div>Hello world</div>
    )
  };
}