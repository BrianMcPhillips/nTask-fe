import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const {
      todo,
      completed,
      handleTodo,
      handleCompleted,
      handleSubmit
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Task</p>
            <input onChange={handleTodo} type="text" defaultValue={todo}/>
          </label>
          <label>
            <p>Completed</p>
            <input  onChange={handleCompleted} type="checkbox" defaultValue={completed}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
