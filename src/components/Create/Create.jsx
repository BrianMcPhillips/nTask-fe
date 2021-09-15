import React, { Component } from 'react';
import Form from '../Form/Form';

export default class Create extends Component {

  // handleSubmit = async(e) => {
  //   e.preventDefault();
  //   await createTask({
  //     todo: this.state.todo,
  //     completed: this.state.completed
  //   });
  // }

  // handleTodoChange = (e) => {
  //   this.setState({ todo: e.target.value })
  // }
  // handleCompletedChange = (e) => {
  //   this.setState({ completed: e.target.value })
  // }

  render() {
    const {
      todo,
      completed,
      handleSubmit, 
      handleTodoChange,
      handleCompletedChange  
    } = this.props;
    return (
      <div>
        <Form 
          todo={todo}
          completed={completed}
          handleTodo={handleTodoChange}
          handleCompleted={handleCompletedChange}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }
}
