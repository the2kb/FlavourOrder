import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import callsActions from '../../actions/callsList';


@connect(
  state => ({
    // callsList: state.callsList
  }),
  dispatch => ({
    // actions: bindActionCreators({...callsActions}, dispatch)
  })
)
export default class Page404 extends React.Component {

  render() {

    return (
      <div>
        <div>
          <h1>Error 404</h1>
        </div>
      </div>
    )
  };
}