import React, { Component } from 'react';
import { createTask} from '../../services/task-api';
import Form from '../Form/Form';

export default class Create extends Component {
  state = {
    todo: '',
    completed: false
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await createTask({
      todo: this.state.todo,
      completed: this.state.completed
    }, token);
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
          handleTodo={this.handleTodo}
          handleCompleted={this.handleCompleted}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
