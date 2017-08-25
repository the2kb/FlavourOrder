import React from 'react';
import {Container, Segment, Header, Form, Table} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import callsActions from '../../actions/callsList';

import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

const options = [
  {key: '1', text: '1', value: '1'},
  {key: '2', text: '2', value: '2'},
];

@connect(
  state => ({
    callsList: state.callsList
  }),
  dispatch => ({
    actions: bindActionCreators({...callsActions}, dispatch)
  })
)
export default class Calls extends React.Component {
  componentWillMount() {
    this.props.actions.fetchCallsList();
  }

  render() {
    const {
      callsList
    } = this.props;

    const calls = callsList.list;

    return (
      <Container>
        <Segment>
          <Header>ICO</Header>

          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Лого</Table.HeaderCell>
                <Table.HeaderCell>Название</Table.HeaderCell>
                <Table.HeaderCell>White paper</Table.HeaderCell>
                <Table.HeaderCell>Описание</Table.HeaderCell>
                <Table.HeaderCell>Начало</Table.HeaderCell>
                <Table.HeaderCell>Окончание</Table.HeaderCell>
                <Table.HeaderCell>Собранно</Table.HeaderCell>
                <Table.HeaderCell>Статус</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                calls.map(call => {

                  const {
                    id,
                    time_stamp,
                    direction,
                    from_fio,
                    from_number,
                    to_fio,
                    to_number,
                    redirect_to_fio,
                    redirect_to_number,
                    business_case,
                    duration
                  } = call;

                  return (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{(new Date(time_stamp)).toLocaleString()}</Table.Cell>
                      <Table.Cell>{direction}</Table.Cell>
                      <Table.Cell>
                        {`${from_fio ? `${from_fio} / ` : ''} ${from_number || ''}`}
                      </Table.Cell>
                      <Table.Cell>
                        {`${to_fio ? `${to_fio} / ` : ''} ${to_number || '' }`}
                      </Table.Cell>
                      <Table.Cell>
                        {`${redirect_to_fio ? `${redirect_to_fio} / ` : ''} ${redirect_to_number || ''}`}
                      </Table.Cell>
                      <Table.Cell>{business_case}</Table.Cell>
                      <Table.Cell>{duration}</Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
          </Table>

        </Segment>
      </Container>
    )
  };
}