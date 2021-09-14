import React, { Component } from 'react';
import { createTask } from '../../services/task-api';
import Form from '../Form/Form';

export default class Create extends Component {
  state = {
    todo: '',
    completed: false
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await createTask({
      todo: this.state.todo,
      completed: this.state.completed
    });
    this.props.history.push('/list');
  }

  handleTodoChange = (e) => {
    this.setState({ todo: e.target.value })
  }
  handleCompletedChange = (e) => {
    this.setState({ completed: e.target.value })
  }

  render() {
    const {
      todo,
      completed
    } = this.state;
    return (
      <div>
        <Form 
          todo={todo}
          completed={completed}
          handleTodo={this.handleTodoChange}
          handleCompleted={this.handleCompletedChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
