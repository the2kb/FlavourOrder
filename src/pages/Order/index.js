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
                                onChange={e => {
                                    this.setState({people: new Array(e.target.value || 0)})
                                }}
                            />
                        </div>
                    </form>
                </div>
                <div>
                    {
                        this.state.people.map((el, key) => {
                            console.log(el, key);  s
                            return (
                                <div>
                                    <input type="text" key={key} />
                                </div>
                            )
                        })
                    }
                </div>
                <div>Количество людей - {this.state.people.length}</div>
            </div>
        )
    };
}