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
export default class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  render() {

    return (
      <div>
        <div>
          <h1>Закупка Табака для Кальяна</h1>
        </div>
        <div>
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="peopleCountInput">Введите кол-во человек </label>
              <input
                type="number"
                id="peopleCountInput"
                className="form-control"
                value={this.state.value}
                onChange={e => {
                  const arr = [];

                  let count = Math.abs(parseInt(+e.target.value || 0, 10));
                  if (count > 20) {
                    count = 20;
                  }

                  for (let i = 0; i < count; i++) {
                    arr.push(<div><input key={i} maxLength={20} /></div>);
                  }

                  this.setState({
                    people: arr
                  })
                }}
              />
            </div>
          </form>
        </div>


        <div>
          {this.state.people}
        </div>
        <div>Количество людей - {this.state.people.length}</div>
      </div>
    )
  };
}