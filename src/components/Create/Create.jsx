import React, { Component } from 'react';
import Form from '../Form/Form';

export default class Create extends Component {
  render() {
    const {
      todo,
      handleSubmit, 
      handleTodoChange, 
    } = this.props;
    return (
      <div>
        <Form 
          todo={todo}
          handleTodo={handleTodoChange}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }
}
