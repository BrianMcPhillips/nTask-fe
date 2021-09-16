import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const {
      data: {
        todo,
        completed,
        id
      },
      handleUpdate,
      handleDelete
    } = this.props;
    return (
      <div>
        <h1>{todo}</h1>
        <h3>Completed: {completed ? 'Yes' : 'No'}</h3>
        <div>
          <button onClick={() => {
            handleUpdate(id, {todo: todo, completed: true});
          }}>
            Complete
          </button>
          <button onClick={() => {
            handleDelete(id);
          }}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}
