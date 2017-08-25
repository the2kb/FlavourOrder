import React from 'react'

export default class App extends React.Component {

  render() {
    return (
      <div style={{padding: '10px 0'}}>
        {this.props.children}
      </div>
    );
  }
}
