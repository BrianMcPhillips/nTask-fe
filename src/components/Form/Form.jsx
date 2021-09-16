import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      todo,
      handleTodo,
      handleSubmit
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Task</p>
            <input onChange={handleTodo} type="text" defaultValue={todo}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
