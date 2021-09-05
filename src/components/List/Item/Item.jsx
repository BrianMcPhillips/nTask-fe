import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const {
      data: {
        todo,
        completed
      }
    } = this.props;
    return (
      <div>
        <h1>{todo}</h1>
        <h3>{completed}</h3>
      </div>
    )
  }
}
